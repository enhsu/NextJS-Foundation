# Next Foundation

## References
[default create-next-app README.md](./create-next-app-readme.md)

## Environment Setup
1. Install node
2. Create next project - `$ npx create-next-app <project-name>`

## Demo page
- local - `$ yarn dev`

## Introduction
Next.js simplifies the process of building a react application for production
- [File based routing](#file-based-routing)
- [Pre-rendering](#pre-rendering)
- API routes
- Support for CSS modules
- Authentication
- Dev and Prod build system

## Project Structure
[readme - Next.js project structure](./notes/project-structure.md)

## File Based Routing
[readme - file based routing](./notes/file-based-routing.md)
- pages routing
- get router parameters
- navigate with UI & programming
- custom 404 page
```sh
# pages folder
pages
├── _app.tsx
├── nested
│   ├── index.tsx               # http://localhost:3000/nested/
│   └── [nestedId]
│       ├── index.tsx           # http://localhost:3000/nested/:nestedId/
│       └── deeper   
│           └── [deeperId].tsx  # http://localhost:3000/nested/:nestedId/deeper/:deeperId
├── catch-all-routes
│   └── [...params].tsx         # http://localhost:3000/catch-all-routes/*
├── optional-catch-all-routes
│   └── [[...params]].tsx       # http://localhost:3000/oprional-catch-all-routes/*
└── index.tsx                   # http://localhost:3000/
```

## Pre-rendering
[readme - pre-rendering](./notes/pre-rendering.md)