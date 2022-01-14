#!/bin/sh

echo "building k8s descriptors and applying to k3d cluster"
kustomize build k8s/environments/k3d/ | kubectl apply -f -
#kustomize build k8s/environments/k3d/ | linkerd inject - | kubectl apply -f -

echo "done - check state with kubectl get pods"
kubectl get pods -n grpc-demo
