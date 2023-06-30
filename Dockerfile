# Build image
FROM node:18.16.1-bullseye-slim AS build

# Install dumb-init to handle PID 1
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /app
COPY package.json yarn.lock tsconfig.json /app/
RUN yarn install --frozen-lockfile
# source code 
COPY ./src /app/src

# build
RUN yarn build


# Production image
FROM node:18.16.1-bullseye-slim

# Set node environment to production, improve libraries performance
ENV NODE_ENV production

COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init

USER node
WORKDIR /app
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
#COPY --chown=node:node . /usr/src/app
# copy just /dist folder
COPY --chown=node:node --from=build /app /app

CMD ["dumb-init", "node", "dist/index.js"]