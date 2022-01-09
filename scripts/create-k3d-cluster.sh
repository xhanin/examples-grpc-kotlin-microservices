#!/bin/sh

echo "create cluster"
k3d cluster create grpc-example-cluster -p "8098:30080@agent:0" --agents 2

