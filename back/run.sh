#!/bin/bash

if [[ $1 = "init" ]]; then
  echo "Running init process"
  ./run.sh migrate
  exit 1
fi

if [[ $1 = "web" ]]; then
  echo "Running Django develop web-server"
  pkill -f runserver
  python3 manage.py runserver 0.0.0.0:8000
  exit 1
fi

if [[ $1 = "migrate" ]]; then
  python3 manage.py migrate
  exit 1
fi

if [[ $1 = "null" ]]; then
  rm db.sqlite3
  rm -rf users/migrations/
  rm -rf subjects/migrations/
  python3 manage.py migrate
  python3 manage.py makemigrations subjects
  python3 manage.py makemigrations users
  python3 manage.py migrate
  python3 manage.py createsuperuser
fi

if [[ $1 = "schema" ]]; then
  python3 manage.py graphql_schema --indent 2
  mv schema.json /data/.
  exit 1
fi

# DEFAULT COMMANDS WITHOUT ARGUMENTS
./run.sh web
