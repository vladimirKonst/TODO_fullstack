# Use the official Node.js 14 as a parent image
FROM node:20-alpine

# Declare the ARG
ARG PORT
ARG DB_HOST
ARG DB_USER
ARG DB_PASS
ARG DB_NAME

# Use the ARG to set an environment variable (optional)
ENV PORT $PORT
ENV DB_HOST $DB_HOST
ENV DB_USER $DB_USER
ENV DB_PASS $DB_PASS
ENV DB_NAME $DB_NAME

# Set the working directory in the container
WORKDIR /usr/src

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE $PORT

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "src/App.ts" ]
