FROM node:latest

WORKDIR /user/src/app

RUN npm install -g webpack nodemon

COPY . /user/src/app

RUN npm install

RUN npm run build

EXPOSE 3036

CMD ["npm", "run", "dev"]

# FROM node:16.13
# WORKDIR /usr/src/app
# COPY . /usr/src/app
# RUN npm install
# RUN npm run build
# EXPOSE 3000
# ENTRYPOINT ["node", "./server/server.js"]
