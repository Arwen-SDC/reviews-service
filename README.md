# Reviews

> This is a module designed to handle reviews for a large online video game retailer. With suitable changes to the database schema it could easily be adapted to other applications.

## Related Projects

  - https://github.com/Team-Aragorn/addToCart-service
  - https://github.com/Team-Aragorn/details-service
  - https://github.com/Team-Aragorn/Recommended-Services
  - https://github.com/Team-Aragorn/Carousel-Images
  - https://github.com/Team-Aragorn/proxy-a-tiller

## Table of Contents


1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

- Node 12.0.0
- MongoDB 4.2.6

## Development

## Backend capabilities

Read API route looks the review that matches the passed in gameID (numbers 1-10000000) and returns all reviews for that game.

POST route created for stess testing purposes

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Then seed the database (with MongoDB running):

```sh
npm run seed
```

Then build the js bundle:

```sh
npm run build
```

To serve the module on localhost:3002:

```sh
npm start
```

### API

(TODO: DOCUMENT INTERNALS OF APP.JSX)
