# siimpl/time-management
FROM ruby:2.3.3-slim

ENV web_root /web
ENV BUNDLE_GEMFILE=${web_root}/Gemfile \
  BUNDLE_JOBS=2 \
  BUNDLE_PATH=/bundle

RUN apt-get update -qq && apt-get install -y \
  build-essential libpq-dev

# Node 7.x
RUN apt-get install -y \
  curl \
  && curl -sL https://deb.nodesource.com/setup_7.x | bash - \
  && apt-get update -qq && apt-get install -y \
  nodejs

RUN mkdir -p ${web_root}
WORKDIR ${web_root}
ADD . ${web_root}

RUN npm install

ENV PATH "$PATH:${web_root}/bin"

