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

## CRUD capabilities

Create API route adds a new review passed from a front end post request by taking the body of the request and inserting it into the database.

Read API route looks the review that matches the passed in gameID (numbers 1-100) and returns all reviews for that game.

Update API finds the specific ID of a review, uses voteString to determine whether someone on the front end has clicked "helpful" or "unhelpful", adds 1 to the respective helpful/unhelpful category, and then saves the updated review to the database.

Delete API route selects a review that matches a gameID and reviewID, and deletes it from the database.



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
