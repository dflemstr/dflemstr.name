FROM dockerfile/nodejs-bower-grunt
MAINTAINER David Flemström <david.flemstrom@gmail.com>

RUN apt-get update -yq && apt-get install -y ruby1.9.3 && rm -rf /var/lib/apt/lists/*
RUN gem install compass

RUN add-apt-repository -y ppa:nginx/stable && \
    apt-get update -yq && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/* && \
    echo "\ndaemon off;" >> /etc/nginx/nginx.conf

ADD package.json /data/
RUN npm install

ADD bower.json /data/
RUN bower install --allow-root

ADD . /data
RUN grunt build

ADD nginx.conf /etc/nginx/sites-available/default

WORKDIR /etc/nginx
CMD ["nginx"]
