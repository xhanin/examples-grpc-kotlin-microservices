# winecellar stub module

gradle is used to generate java+kotlin proto+grpc stubs

alternatively, `buf` can be used like that:
```shell
 buf generate ../proto
```

moreover, `buf` is used to generate the proto image for envoy config
```shell
buf build ../proto/src/main/proto -o gen/proto/winecellar.pb 
cp gen/proto/winecellar.pb ../../../k8s/base/proto 
```
