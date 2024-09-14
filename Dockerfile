FROM node:alpine AS build
LABEL maintainer="Piush Bose <dev.bosepiush@gmail.com>"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:alpine AS publish
LABEL maintainer="Piush Bose <dev.bosepiush@gmail.com>"

WORKDIR /src

COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./next.config.mjs

RUN npm install --omit=dev
EXPOSE 3000

LABEL vendor="Snappy notes"
LABEL description="The official web app pf Snappy notes, built with the power of Next.js"
LABEL	version="1.0"
LABEL	license="MIT"

USER nobody
CMD ["npm", "start"]