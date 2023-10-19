FROM node:14.15.5-alpine

WORKDIR /home/app
COPY package*.json ./
ENV NODE_ENV=development DB_HOST=mysql
COPY . /home/app
RUN npm install

CMD ["node", "index.js"]
