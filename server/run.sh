#!/bin/bash
trap "exit 0" TERM

# setup exit nicely
_term() { 
  echo "Received SIGTERM!" 
  kill -TERM "$child" 2>/dev/null
  wait "$child"
  exit 0
}
trap _term TERM

dos2unix mvnw
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" &
while true; do
  inotifywait -e modify,create,delete,move -r ./src/ && ./mvnw compile &
  child=$!
  wait "$child"
done
