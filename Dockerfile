FROM node:4.2.3-onbuild
ADD . /build
WORKDIR /build
RUN ['npm', 'install']
RUN ['npm', 'build']
ENTRYPOINT npm start
