FROM node:16.14-alpine

WORKDIR /usr/src/app

COPY package-lock.json package-lock.json
COPY package.json package.json

RUN npm install --omit dev

COPY . /usr/src/app

EXPOSE 3000/tcp
CMD ["node", "index.js"]