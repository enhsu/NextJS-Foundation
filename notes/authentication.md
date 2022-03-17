# Authentication

## Navigation

- [What does authentication entail when it comes to Next.js](#authentication-in-nextjs)
- [Next-auth library](#next-auth-library)
- [Authenticating with GitHub](#setup-nextauth)
- [Client-side authentication](#client-side-authentication)
- [Server-side authentication](#server-side-authentication)
- [How to work with a database like MongoDB](#mongodb)

## Authentication in Next.js

User -> `identity(Authentication)` and `access(Authorization)`

> identity(Authentication) - who a user is
>
> access(Authorization) - verify what permissions the user has

- clinet-side authentication
- server-side authentication
- API routes authenticatoin

---

User data

> User data no need to persist -> auth services like Github, Facebook etc. to ensure the user is authenticated
>
> User data need to persist -> own database

---

Authentication for Next.js -> `NextAuth.js`

- [reference - NextAuth.js](https://next-auth.js.org/)

---

## next-auth library

### NextAuth references

- [reference - Adding Authentication to an existing serverless Next.js App in no time with NextAuth.js](https://dev.to/ndom91/adding-authentication-to-an-existing-serverless-next-js-app-in-no-time-with-nextauth-js-192h)
- [reference - NextAuth Doc](https://next-auth.js.org/getting-started/introduction)

### setup NextAuth

example: GitHub Provider

1. install `next-auth`
1. create `/pages/api/auth/[...nextauth].ts`
   - [reference - Add API route](https://next-auth.js.org/getting-started/example#add-api-route)
   - [reference - providers: Github](https://next-auth.js.org/providers/github)
1. Setup github
   > Github > Settings > Developer Settings > OAuth Apps > Register a new applicatioin
   >
   > local development -> Homepage URL & Authorization callback URL could be `http://localhost:3000`
1. save `Clien ID` and `Client secrets` in `.env.local` for `[...nextauth].ts`
1. test API directly in `http://localhost:3000/api/auth/signin` and `http://localhost:3000/api/auth/signout`
   > after signin, in localhost:3000 - browser > Developer tools > Application > Cookies > http://localhost:300, should have `next-auth.session-token`

---

## Client-side Authentication

- [reference - NextAuth Client API](https://next-auth.js.org/getting-started/client)
- [source code - singIn & signOut](./../layouts/auth.tsx)

### setup SessionProvider befero useSession

- [reference - SessionProvider](https://next-auth.js.org/getting-started/client#sessionprovider)
- [reference - custom client session handling](https://next-auth.js.org/getting-started/client#custom-client-session-handling)
- [souce code](./../pages/_app.tsx)

### check if a user is signed in or not within react component

- [reference - useSession Hook](https://next-auth.js.org/getting-started/client#usesession)

```ts
// isSignIn condition
import { useSession } from "next-auth/react";
const { data: session, status } = useSession();
console.log("isSignIn: ", session && status === "authenticated");
```

```ts
// isSignOut condition
import { useSession } from "next-auth/react";
const { data: session, status } = useSession();
console.log("isSignOut", session === null);
```

### Securing Pages Client-side

- [reference - tutorial video](https://youtu.be/vCpqiRabmDk)
- [reference - secure page clien-side](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#client-side)
- [reference - NextAuth getSession](https://next-auth.js.org/getting-started/client#getsession)
- [souce code](./../pages/auth/client-side-authentication/index.tsx)

---

## Server-side Authentication

### return data base on session in getServerSideProps

- [reference - secure page server-side](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#server-side)
- server-side authentication: getServerSideProps + getSession
- securing page server-side: return `redirect` object
- [souce code](./../pages/auth/server-side-authentication/index.tsx)

### Securing API Routes

- [reference - Securing API Routes](https://next-auth.js.org/tutorials/securing-pages-and-api-routes#securing-api-routes)
- [souce code](./../pages/api/auth/test-session.ts)

---

## MongoDB

1. create mongoDB database on `mongodb atlas`
   1. sign in
   1. Build a database
   1. choice Free one for dev
   1. pick a provider and a region -> create cluster
   1. left tab: Security > Database access -> add new database user, fill in username(`DB_USER`) & password(`DB_PASSWORD`) -> add user
   1. left tab: Security > Network access -> add IP address -> allow access from anywhere for dev -> confirm
   1. left tab: Deployment > Databases -> choice a Cluster -> click `connect` -> connect your applicatioin -> get the `DB_URL`
1. project install mongodb
1. add mongoDB related configuration in `.env.local`
   - `DB_USER`, `DB_PASSWORD`, `DB_URL`
   - edit DB_URL -> change default database name `myFirstDatabse` to custom one
1. edit `/pages/api/auth/[...nextauth].ts`
   - [reference - mongodb adapter](https://next-auth.js.org/adapters/mongodb)
   - [reference - session strategy, default: jwt](https://next-auth.js.org/configuration/options#session)

- [reference - tutorial video](https://youtu.be/H4ptrFimcSM)
- [reference - How to Integrate MongoDB Into Your Next.js App](https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/)
- [reference - mongodb atlas, Cloud-hosted MongoDB service](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_taiwan_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624371&adgroup=115749712503)

### Callback

add custom properties in NextAuth session, token etc.

- [reference - NextAuth Callback](https://next-auth.js.org/configuration/callbacks)
- [souce code](./../pages/api/auth/%5B...nextauth%5D.ts)
