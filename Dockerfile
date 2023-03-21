FROM node:18.15.0

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

USER node

EXPOSE 3000

CMD ["npm ", "run", "dev"]
