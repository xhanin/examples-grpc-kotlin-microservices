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
