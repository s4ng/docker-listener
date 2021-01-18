#!/bin/bash
PORT=6379
REPOSITORY=s4ng/cicd-dino
NAME=cicdapp

docker container stop $(docker container ls -q --filter name=$NAME)
docker rmi $(docker images -q $REPOSITORY)
docker pull $REPOSITORY
docker run -d --rm --name $NAME -p $PORT:$PORT $REPOSITORY
exit 0
