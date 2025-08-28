# ******************************************************************************
# *** BASE STAGE
# ******************************************************************************
# use the official Bun image, see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.2.21-alpine AS base

WORKDIR /src

# ******************************************************************************
# *** INSTALL STAGE
# ******************************************************************************
FROM base AS install

COPY package.json bun.lock ./
COPY prisma ./prisma/

# Don't use --production as we need nx for the build
RUN bun install --frozen-lockfile

# ******************************************************************************
# *** BUILD STAGE
# ******************************************************************************
# Copy node_modules from temp directory then copy all (non-ignored) project files into the image
FROM base AS build

ENV CI=1 \
    NX_DAEMON=false \
    NX_SKIP_NX_CACHE=true \
    NX_CLOUD=false \
    NX_NON_NATIVE_HASHING=true \
    NODE_OPTIONS=--max_old_space_size=8192 
    
COPY --from=install ./src/node_modules node_modules
COPY . .

RUN bunx nx run frontend-tail-mates:build:production

# ******************************************************************************
# *** DEPLOY STAGE
# ******************************************************************************
# Copy production dependencies and source code into final image
FROM base AS deploy

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