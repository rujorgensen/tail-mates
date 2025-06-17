# ******************************************************************************
# *** BASE STAGE
# ******************************************************************************
# use the official Bun image, see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.2.16-alpine AS base

WORKDIR /src

# ******************************************************************************
# *** INSTALL STAGE
# ******************************************************************************
FROM base AS install

COPY package.json bun.lock ./
COPY prisma ./prisma/

RUN bun install --frozen-lockfile

# ******************************************************************************
# *** BUILD STAGE
# ******************************************************************************
# Copy node_modules from temp directory then copy all (non-ignored) project files into the image
FROM base AS build

COPY --from=install ./src/node_modules node_modules
COPY . .

RUN bun run apps/backend/build.js --projectRoot=apps/backend

# ******************************************************************************
# *** DEPLOY STAGE
# ******************************************************************************
FROM base AS deploy

COPY package.json ./
COPY prisma ./prisma/
COPY --from=build ./src/dist ./dist

# Include Prisma generated types
COPY --from=install ./src/node_modules/@prisma-types  ./node_modules/@prisma-types

# Include binaries
COPY --from=install ./src/node_modules/.bin  ./node_modules/.bin

# Include Prisma engines
COPY --from=install ./src/node_modules/@prisma  ./node_modules/@prisma

# Run the app as bun_user
RUN addgroup -S app_group && adduser -S bun_user -G app_group
USER bun_user
EXPOSE 3100/tcp

ENTRYPOINT [ "bun", "deploy:tail-mates"]