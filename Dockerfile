# syntax=docker/dockerfile:1

#
# builder
#

FROM node:22.7-alpine AS builder
RUN corepack enable
WORKDIR /build

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

#
# runner
#

FROM node:22.7-alpine AS runner
WORKDIR /app

COPY --from=builder /build/dist .
CMD ["npx", "serve", "."]
