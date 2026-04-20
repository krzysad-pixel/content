FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev --no-audit --no-fund

COPY src ./src
COPY public ./public

ENV PORT=3333
EXPOSE 3333

CMD ["node", "src/server.js"]
