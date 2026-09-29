FROM ubuntu

RUN apt-get update && apt-get install -y iputils-ping
COPY functions.sh /app/
ENTRYPOINT ["bash", "/app/functions.sh"]
CMD ["google.com"]
