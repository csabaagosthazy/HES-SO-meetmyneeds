FROM nginx:alpine

# HTML -> HTTP server document root
COPY build /usr/share/nginx/html
# HTTP server configuration for routing
COPY nginx-config.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]