FROM postgres:latest

WORKDIR /docker-entrypoint-initdb.d/
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432