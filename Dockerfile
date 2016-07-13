FROM node:5.0.0
ADD . /build
WORKDIR /build
RUN ['npm', 'install']
ENTRYPOINT npm start
