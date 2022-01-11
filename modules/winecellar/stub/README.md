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

plus, it is used to generate swagger descriptor (with generate command above) which can in turn be converted to openapiv3 with this command:
```shell
openapi-generator generate -g openapi-yaml -i gen/proto/openapi/example/winecellar/winecellar.swagger.json -o gen/proto/openapiv3
```
(note that it requires to have openapi-generator installed - https://openapi-generator.tech/)
