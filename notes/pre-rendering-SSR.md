# Server-Side Rendering

## Problems with Static Site Generation(SSG)

1. We can't fetch data per request and pre-render
1. we don't get access to the incoming request if the page is pre-rendered at build time

---

SOLUTION: SSR

## References

- [reference - video 31 - 35](https://youtu.be/3eUZeuGXo_U)
- [reference - getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
- [reference - getServerSideProps all context parameters](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#context-parameter)
- [reference - node setHeader](https://www.geeksforgeeks.org/node-js-response-setheader-method/)
  ```js
  // usage: jsonwebtoken?
  response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
  ```

## About SSR

![SSR overview](./assets/server-side-rendering-with-data.png)
Next.js allows you to pre-render a page not at build time but at request time

we can write server-side code directly in `getServerSideProps`

### NOTE

- SSR pre-rendering is slower compared to SSG as the server must compute the result on `every request`, use SSR only if absolutely necessary
- `getServerSideProps` will run at request time
- `getServerSideProps` only in `page` folder
- `getServerSideProps` only for `pre-rendering` and `NOT client-side data fetching`

## Basic Implement SSR

[souce code - implement SSR](./../pages/pre-rendering/getServerSideProps-basic/%5BtodoState%5D.tsx)

```tsx
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?completed=${params?.todoState}`
  );
  const data = await response.json();

  return {
    props: {
      todos: data,
      state: params?.todoState,
    },
  };
};
```
