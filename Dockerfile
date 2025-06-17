FROM node:20.18.0

WORKDIR /app

COPY package*.json .env ./
RUN npm install
COPY . .

RUN npm run build

RUN mkdir -p /var/www/html && mv dist/* /var/www/html

VOLUME /var/www/html

EXPOSE 5173
CMD ["npm", "run", "dev"]