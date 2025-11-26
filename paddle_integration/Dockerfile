FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install express axios body-parser dotenv
EXPOSE 8080
CMD ["node","server.js"]
