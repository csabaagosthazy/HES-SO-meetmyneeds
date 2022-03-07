### Stage 1: Building the application
ARG GITLAB_DEPENDENCY_PROXY=docker.io

FROM ${GITLAB_DEPENDENCY_PROXY}/node:16.14-buster AS builder

# Build directory separate from the rest
WORKDIR /usr/src/app

# Install build dependencies first (Docker image cache optimization)
COPY package.json package-lock.json ./
RUN npm install

# Copy the remaining files
COPY . /usr/src/app

RUN npm run build

### Stage 2: Putting the application in the Nginx docker container
FROM ${GITLAB_DEPENDENCY_PROXY}/nginx:alpine

# HTML -> HTTP server document root
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# HTTP server configuration for routing
COPY nginx-config.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]