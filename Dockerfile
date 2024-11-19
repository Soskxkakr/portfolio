# Base image
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy the .env files
COPY . .

# Install app dependencies
RUN npm install

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start"]