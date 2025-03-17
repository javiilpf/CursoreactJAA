#!/bin/bash

HOST="$1"
PORT="27017"

until nc -z -v -w5 "$HOST" "$PORT"; do
  echo "Waiting for database connection at ${HOST}:${PORT}..."
  sleep 2
done

echo "MongoDB is up and ready!"
shift
exec "$@"
