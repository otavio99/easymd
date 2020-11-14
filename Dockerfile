FROM php:7-alpine
WORKDIR /var/www
COPY . /var/www
COPY --from=composer /usr/bin/composer /usr/bin/composer