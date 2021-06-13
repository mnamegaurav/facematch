# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ARG REACT_APP_SKY_LARK_API_KEY
ENV REACT_APP_SKY_LARK_API_KEY $REACT_APP_SKY_LARK_API_KEY

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start", "--port", "3000"]