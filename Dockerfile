FROM node:14.15.4@sha256:04a33dac55af8d3170bffc91ca31fe8000b96ae1bab1a090deb920ca2ca2a38e AS build

WORKDIR /app

COPY package.json yarn.lock ./
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src

RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:14.15.4-slim@sha256:4f4e17e43e434774aac4d323b5b1d277028bfc646d3685883fea17ac9286b382

ENV PORT 4000

WORKDIR /app

COPY package.json yarn.lock ./
COPY --from=build /app/dist ./dist

RUN yarn install --frozen-lockfile --production

EXPOSE $PORT

CMD ["node", "dist/main.js"]
