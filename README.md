# examples-grpc-kotlin-microservices

## testing with cli

Call load stock for a cellar
```shell
grpcurl -plaintext -d '{"wineCellarId":"111"}' localhost:8889 winecellar.WinecellarService/LoadStock
```

Load test for cellar stock load
```shell
ghz --insecure localhost:8889 --call winecellar.WinecellarService/LoadStock -d '{"wineCellarId":"111"}'
```

## running in k3d

the first time, assuming you have docker, k3d and kubectl installed
```shell
sh scripts/all-from-scratch.sh
```

to rebuild / redeploy (warn: importing images is very slow)
```shell
sh scripts/all-with-existing-cluster.sh
```

## telepresence

for development, you can use the k3d deployment and intercept only the server you want

```shell
telepresence connect
# intercept winery service
telepresence intercept app-winery-server --port 8888:http
```

the winery service will be the one running on local machine, listening on port 8888

with telepresence, the services of the cluster are accessible as if the local machine was part of the k8s cluster

so you can access the winecellar grpc service with:
```shell
grpcurl -plaintext -d '{"wineCellarId":"111"}' app-winecellar:80 winecellar.WinecellarService/LoadStock
```
