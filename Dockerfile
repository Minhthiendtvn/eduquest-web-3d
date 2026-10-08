FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY index.html vite.config.js ./
COPY src ./src
COPY public ./public
COPY installer ./installer
COPY database ./database
RUN VITE_REQUIRE_API=true npm run build

FROM node:22-alpine AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY server ./server
COPY src ./src
COPY --from=build /app/dist ./dist
USER node
EXPOSE 8787
CMD ["npm", "run", "start"]
