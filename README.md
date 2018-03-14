# GraphQL-MongoDB Blog

[![Build Status](https://travis-ci.org/Lazhari/graphql-blog.svg?branch=master)](https://travis-ci.org/Lazhari/graphql-blog)

> GraphQL Blog in Node.js using Express, MongoDB and Mongoose.

## Get start

```
$ npm install
$ npm start
```

## Requirements

*   [Node.js](http://nodejs.org/)
*   [MongoDB](https://www.mongodb.org/)

## References

*   [Creating a GraphQL Server with Node.js and MongoDB](https://www.sitepoint.com/creating-graphql-server-nodejs-mongodb/)
*   [sitepoint-editors/graphql-nodejs](https://github.com/sitepoint-editors/graphql-nodejs)

## Mutations & Queries

### Mutation: Add User

```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: c77d5e4f-5bc9-f897-a458-525fd72ea7d6" -d '{
    "query": "mutation ($data: UserInput!) { addUser(data: $data) }",
    "variables": {
        "data": {
            "firstName": "Mohammed",
            "lastName": "Lazhari",
            "summary": "Software Engineer",
            "email": "med.lazhari@blog.com"
        }
    }
}' "http://localhost:8080/graphql"
```

### Query: Get all users (with firstName lastName email)

```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 4a99a27b-e998-5d61-e8a1-2831159fac2b" -d '{
    "query": "query { users { firstName, lastName, email } }"
}' "http://localhost:8080/graphql"
```

### Mutation: Add blog post

```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 713ce4d8-bf9a-f86d-3940-0628a27fed69" -d '{
    "query": "mutation ($data: BlogPostInput!) { addBlogPost(data: $data) }",
    "variables": {
        "data": {
            "_id": "569e72a7ebd14d53eccef867",
            "title": "First post",
            "description": "My first post on my blog"
        }
    }
}' "http://localhost:8080/graphql"
```

### Query: Get all blog posts (with title, description and populate userId)

```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 9c32c37e-3e02-af9c-32d2-e875d89e51fb" -d '{
    "query": "query { blogPosts { title, description, userId {firstName, lastName, summary}} }"
}' "http://localhost:8080/graphql"
```

### Mutation: Add blog post 3 and add comment to post

```
curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 3ce5d4fa-3900-ff8e-ae1f-0b94521faa64" -d '{
    "query": "mutation ($data: BlogPostInput!, $commentData: CommentInput!) { addBlogPost(data: $data) addComment(data: $commentData) }",
    "variables": {
        "data": {
            "_id": "569e75fdebd14d53eccef869",
            "title": "Third post",
            "description": "My third post on my blog"
        },
        "commentData": {
            "_id": "569e7603ebd14d53eccef86a",
            "postId": "569e737bebd14d53eccef868",
            "text": "Comment on the second blog post"
        }
    }
}' "http://localhost:8080/graphql"
```

## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
