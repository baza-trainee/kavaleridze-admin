FROM node:18-alpine3.17 as build

ARG SERVER_URL

WORKDIR /app
COPY . /app

RUN npm install
RUN VITE_SERVER_URL=${SERVER_URL} npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]