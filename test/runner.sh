FILE=config/testacular.$1.conf.js
BIN=node_modules/testacular/bin/testacular

if [ -f test/$FILE ]; then
  FILE=test/$FILE
else
  BIN=../$BIN
fi

$BIN start $FILE
