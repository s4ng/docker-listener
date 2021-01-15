#!bin/bash
PORT=6379
docker pull s4ng/cicd-dino
docker run --rm -it --name cicdapp -p $PORT:$PORT s4ng/cicd-dino