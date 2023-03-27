FROM node:18.15-alpine

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate && npm t

EXPOSE 3000

CMD ["npm", "run", "migrate:deploy"]
