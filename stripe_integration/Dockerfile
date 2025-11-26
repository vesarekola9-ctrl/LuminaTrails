FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install express stripe body-parser dotenv
EXPOSE 4242
CMD ["node","server.js"]
