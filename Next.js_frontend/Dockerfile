# ./frontend/Dockerfile
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Make the next app's volume to listen for changes
VOLUME [ "/usr/src/app" ]

# Build the Next.js app  
RUN npm run build  

# Expose the port Next.js runs on
EXPOSE 3000

# Start the development server
CMD [ "npm", "run", "start" ]
