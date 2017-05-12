FROM nodesource/node:latest

ADD package.json package.json
RUN npm install

ADD app.js app.js
RUN mkdir ./public
ADD index.html ./public/index.html

EXPOSE 8090

CMD ["node","app.js"]
