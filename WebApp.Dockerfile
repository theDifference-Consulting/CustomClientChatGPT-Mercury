# Frontend build stage
FROM node:20-alpine AS frontend  
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app 
COPY ./frontend/package*.json ./  
USER node
RUN npm ci  
COPY --chown=node:node ./frontend/ ./frontend  
COPY --chown=node:node ./static/ ./static  
WORKDIR /home/node/app/frontend
RUN NODE_OPTIONS=--max_old_space_size=8192 npm run build
  
# Backend build stage
FROM python:3.11-alpine 

# Install build dependencies and required libraries
RUN apk add --no-cache --virtual .build-deps \  
    build-base \  
    libffi-dev \  
    openssl-dev \  
    curl \  
    && apk add --no-cache \  
    libpq 

# Copy requirements and install dependencies
COPY requirements.txt /usr/src/app/  
RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt \  
    && rm -rf /root/.cache  

# Install Spacy language model
RUN python -m spacy download en_core_web_sm

# Copy application code and static assets from frontend stage
COPY . /usr/src/app/  
COPY --from=frontend /home/node/app/static  /usr/src/app/static/

WORKDIR /usr/src/app  
EXPOSE 80  

# Command to run the application
CMD ["gunicorn"  , "-b", "0.0.0.0:80", "app:app"]
