PORT=$1
if [ -z "$PORT" ]; then
  PORT=8080
fi
./node_modules/http-server/bin/http-server -p $PORT ./app
