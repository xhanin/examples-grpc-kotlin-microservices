#!/bin/sh

echo "importing images in k3d cluster"
k3d image import -c grpc-example-cluster winery-server  winecellar-server
