#!/bin/sh

echo "building k8s descriptors and applying to k3d cluster"
kustomize build k8s/environments/k3d/ | kubectl apply -n grpc-demo -f -

echo "done - check state with kubectl get pods"
kubectl get pods -n grpc-demo
