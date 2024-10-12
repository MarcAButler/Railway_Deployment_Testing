# FROM node:19.5.0-alpine
FROM node:latest

# ENV NODE_ENV development
ENV NODE_ENV production

WORKDIR /app



COPY package*.json yarn.lock ./ 
RUN yarn && yarn install && yarn add global nodemon

COPY . .

# Build the application
# [FILL ME IN]

# For Development
# CMD yarn nodemon index

# For Production - Make sure to run yarn build first
CMD node index