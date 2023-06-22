# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm link

# Set the command to run the CLI application
ENTRYPOINT ["mars-rover"]
