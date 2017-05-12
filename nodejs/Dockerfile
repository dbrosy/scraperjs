FROM nodesource/node:latest

ADD package.json package.json
RUN npm install express request cheerio path handlebars --save

ADD app.js app.js

EXPOSE 8000

CMD ["node","app.js"]
