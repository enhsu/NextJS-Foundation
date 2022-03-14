# API routes

Next.js is a full stack framework

API routes allow you to create RESTful endpoints as part of your Next.js application folder structure

`note: demo database will create and handle in memeory`

## references

- [reference - API Routes Next.js Doc](https://nextjs.org/docs/api-routes/introduction)

## folder structure

folder for API routes - `/pages/api`

## handle data demo

folder

> `/pages/api/comments/index.ts`

api

> `host-path/api/comments`

get data in front-end page

> `fetch('/api/comment')`

## RESTful API

- GET
  - [source code - getComments function](./../pages/api/comments/index.ts)
  - [source code - dynamic route, get specific comment, getComment function](./../pages/api/comments/%5BcommentId%5D.ts)
  - [source code - implement frontend](./../pages/api-routes/get-request/index.tsx)
- POST
  - [source code - postComment function](./../pages/api/comments/index.ts)
  - [source code - implement frontend](./../pages/api-routes/post-request/index.tsx)
- DELETE
  - [source code - deleteComment function](./../pages/api/comments/%5BcommentId%5D.ts)
  - [source code - implement frontend](./../pages/api-routes/delete-request/index.tsx)

## Catch All API Routes

use `[...params].ts` or `[[...params]].ts`

- [source code](./../pages/api/%5B...params%5D.ts)

## API and Pre-rendering

- we can call external api
- we should NOT call our own API routes for per-rendering content
- for our own api, dont't fetch data, use the data directly from the database. It can save at least 100 milliseconds
