FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build
RUN npm prune --production

# Stage 2: Runner
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "build"]