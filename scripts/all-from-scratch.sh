#!/bin/sh

sh scripts/create-k3d-cluster.sh
sh scripts/create-k3d-namespace.sh

sh scripts/all-with-existing-cluster.sh
