# examples-grpc-kotlin-microservices

## testing with cli

first run the grpc servers locally (by running the `<Module>ApplicationKt` of a module, eg `WinecellarApplicattionKt`)

then you can use grpcurl and ghz to test the grpc services:

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

moreover, you will need to add these names to your `hosts` file:
```text
127.0.0.1 sample-grpcweb.k3d.localhost sample-grpcjson.k3d.localhost
```

### json api

then you can access the json api with curl:
```shell
curl -H "Content-Type: application/json" \
   http://sample-grpcjson.k3d.localhost:8098/winecellars
```

```shell
curl -H "Content-Type: application/json" \
   http://sample-grpcjson.k3d.localhost:8098/winecellars/111/stock
```

### react app using grpc-web

you can run the app located in `modules/web-bo/app` and running `npm start`

the app is performing a grpc-web call proxied through envoy running in k8s cluster

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
