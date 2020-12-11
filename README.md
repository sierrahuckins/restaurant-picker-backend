# restaurant-picker-backend

## Commands

### MongoDB

Start DB.

```sudo systemctl start mongod```

Check Status of DB.

```sudo systemctl status mongod```

Stop DB.

```sudo systemctl stop mongod```

### Run Application

```nodemon index.js```

### Test Containerized Appication Locally

Currently implemented with docker compose.

```docker-compose -f docker/docker-compose.yml up --build```

When done testing, tear down containers.

```docker-compose -f docker/docker-compose.yml down```

## Technologies Used

### NodeJS - v14.2.0

```npm install express```

De facto library for building REST APIs with Node.js.

### NPM - 6.14.4

### Docker - 19.03.8

```sudo apt install docker```

### Docker Compose

[Installation Instructions](https://docs.docker.com/compose/install/)

Used for local testing of Node + MongoDB.

#### Helpful Packages

```npm install -D nodemon```

Used to hot reload API on code changes.

### Mongoose

```npm install mongoose```

NoSQL database.

## Tutorials Followed

[Setting Up MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

[Creating a Basic REST API with NodeJS](https://medium.com/swlh/creating-a-basic-rest-api-with-node-js-from-scratch-b8f539682452)

[How to Dockerize NodeJS Application](https://cloudonaut.io/how-to-dockerize-your-nodejs-express-application-for-aws-fargate/)

