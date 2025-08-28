ARG NODE_VERSION=22.19.0

# ******************************************************************************
# *** BASE STAGE
# ******************************************************************************
FROM node:${NODE_VERSION}-bullseye-slim AS base

WORKDIR /src

# *** SET ENVIRONMENT VARIABLES

# Disable analytics noise
ENV NG_CLI_ANALYTICS=false

# Disable NX Cloud, this build has to work regardless of NX Cloud
ENV NX_NO_CLOUD=true

# Switch into a non-interactive, “CI-friendly” mode.
ENV CI=1

# Optional: Reduce Angular builder workers (prevents esbuild from forking too much)
# ENV NG_BUILD_MAX_WORKERS=2

# *** INSTALL BUN
RUN npm install -g bun
RUN bun -v

# ******************************************************************************
# *** INSTALL STAGE
# ******************************************************************************
FROM base AS install

COPY package.json bun.lock ./
COPY prisma ./prisma/

# Don't use --production as we need nx for the build later on
RUN bun install --frozen-lockfile

# ******************************************************************************
# *** BUILD STAGE
# ******************************************************************************
# Copy node_modules from temp directory then copy all (non-ignored) project files into the image
FROM base AS build

# 1) More heap for Node processes spawned by Nx/Angular
# ENV NODE_OPTIONS=--max-old-space-size=4096

COPY --from=install ./src/node_modules node_modules
COPY . .

RUN node ./node_modules/.bin/nx run frontend-tail-mates:build:production --skip-nx-cache

# ******************************************************************************
# *** DEPLOY STAGE
# ******************************************************************************
# Copy production dependencies and source code into final image

# alpine: use a lightweight image
FROM oven/bun:1.2.21-alpine AS deploy

WORKDIR /src

# Host is necessary for Docker to bind correctly
ENV HOST=0.0.0.0
ENV PORT=3101

# Can be used for debugging: RUN apk add --no-cache curl

COPY --from=build ./src/dist ./dist
COPY --from=install ./src/node_modules/@prisma-types  ./node_modules/@prisma-types

# Run the app as bun_user
RUN addgroup -S app_group && adduser -S bun_user -G app_group
USER bun_user
EXPOSE 3101

ENTRYPOINT [ "bun", "run", "./dist/apps/frontend/server/server.mjs"]