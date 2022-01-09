#!/bin/sh

echo "create cluster"
k3d cluster create grpc-example-cluster -p "8098:80@loadbalancer" -p "8099:30080@agent:0" --agents 2

