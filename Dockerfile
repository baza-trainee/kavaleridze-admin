FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/admin

COPY package.json .

RUN npm install 

COPY . . 

RUN npm run build 

FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app/admin

COPY --from=BUILD_IMAGE /app/admin/dist/ /app/admin/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 5174

CMD ["npm", "run", "preview" ]