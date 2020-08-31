FROM node:12-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 4000
ENV NODE_ENV=production
CMD ["node", "index.js"]




# FROM node:12-alpine
# RUN mdkir /srv/app
# COPY app.js /srv/app
# COPY  package.json /srv/app
# WORKDIR /srv/app
# RUN npm install
# EXPOSE 4000
# ENV NODE_ENV=production
# CMD ["node", "index.js"]