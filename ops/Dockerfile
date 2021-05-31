FROM alpine:3.13 AS base
RUN apk add --no-cache nodejs-current npm yarn tini
WORKDIR /opt/api
ENTRYPOINT ["/sbin/tini", "--"]
COPY ./package.json .

# Install Heavy JS Depenencies ...
FROM base AS dependencies
RUN yarn

# Build JS Struff
FROM dependencies AS build
COPY . .
RUN yarn build

# Test things
FROM build AS test
RUN  yarn run lint &&  yarn run test

# Ready to run stage
FROM base AS release
COPY prisma .
RUN yarn global add prisma
RUN prisma generate
RUN yarn --only=production
COPY --from=build /opt/api/dist ./dist
EXPOSE 5000
CMD yarn run start:prod