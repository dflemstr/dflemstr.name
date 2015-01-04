FROM dockerfile/nginx
MAINTAINER David Flemström <david.flemstrom@gmail.com>

ADD dist /data
ADD nginx.conf /etc/nginx/sites-available/default
