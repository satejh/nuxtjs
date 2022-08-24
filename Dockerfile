#FROM node:10.7
FROM node:14-alpine
ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
ENV PORT=80
CMD ["npm", "run", "start"]
