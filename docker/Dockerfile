FROM node:10.16.2-stretch

WORKDIR /usr/src/app

ENV NODE_ENV production

# Install envsubst
RUN apt-get update && apt-get install -y gettext
COPY docker/custom-entrypoint /usr/local/bin/
RUN chmod u+x /usr/local/bin/custom-entrypoint
ENTRYPOINT ["custom-entrypoint"]
RUN mkdir /usr/src/app/config/

# Copy config files
# Commented out because I don't have any config files right now
# COPY config/*.tmp /tmp/config/

# Install Node.js dependencies
COPY package*.json /usr/src/app/
RUN npm ci --only=production

# Copy Node.js files
COPY models /usr/src/app/models
COPY index.js /usr/src/app/

# Expose port 8080 and start Node.js server
EXPOSE 8080
CMD ["node", "index.js"]