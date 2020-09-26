FROM node:12
WORKDIR /usr/src/app
COPY . .
RUN yarn install
ENV HOST 0.0.0.0
ENV PORT 3000
RUN yarn build
CMD [ "yarn", "start" ]
