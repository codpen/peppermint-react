FROM node:lts-alpine AS deps

RUN mkdir -p /usr/src/app
ENV PORT 5001

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache
RUN yarn install --production --network-timeout 1000000 --ignore-scripts && yarn cache clean --force
# RUN yarn unistall bcrypt && yarn add bcrypt
RUN yarn add --dev typescript @types/node && yarn add prisma -g

COPY . /usr/src/app

ENV NODE_ENV=production

RUN yarn build

EXPOSE 5001

CMD [ "yarn", "run", "docker" ]