FROM node:18.16.0-alpine

WORKDIR /var/www/app

COPY package*.json /var/www/app/

RUNi npm install

COPY . /var/www/app/

EXPOSE 3000

CMD ["npm", "run", "start"]
