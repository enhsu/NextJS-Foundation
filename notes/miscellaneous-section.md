# Miscellaneous Section

## Navigation

- [App Layout](#layouts)
- [Head Component](#head-component)
- [Image Component](#image-component)
- [Absolute Imports and Module Paths](#absolute-imports-and-module-path-aliases)
- [Static HTML Export](#static-html-export)
- [Configure TypeScript Support](#typescript-support)
- [Next Config File]
- [Preview Mode](#preview-mode)
- [Redirects](#redirects)
- [Environment Variables](#environment-variables)

## Layouts

global layout

> add component in `_app.tsx`

per-page layout

> in component, use `[compoennt-name].getLayout = function getLayout(page) {}`
>
> also remember setup the `_app.tsx` file
>
> parameter in getLayout, `page`, is the component's jsx return content

---

- [reference - Layouts](https://nextjs.org/docs/basic-features/layouts)
- [reference - per-page layouts](https://nextjs.org/docs/basic-features/layouts#per-page-layouts)

## Head Component

- [reference - next/head](https://nextjs.org/docs/api-reference/next/head)
- advanced - haed with dynamic route

  ```jsx
  // [blogId].jsx
  import Head from "next/head";

  const Blog = ({ title, description }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
      </>
    );
  };

  export async function getServerSideProps() {
    return {
      props: {
        title: "Demo Title",
        description: "Demo description",
      },
    };
  }
  ```

## Image Component

- [reference - next/image](https://nextjs.org/docs/api-reference/next/image)
- put all image files in `public` folder
- benifit of `next/image`
  - automatic optimization of the image size and format
  - lazy loading - [reference - priority](https://nextjs.org/docs/api-reference/next/image#priority)
  - the ability to render a placeholder image while the actual image is still loading - [reference - placeholder](https://nextjs.org/docs/api-reference/next/image#placeholder)
    ```jsx
    ...
    <Image src={img} placeholder='blur' />
    ...
    ```

## Absolute Imports and Module path aliases

- [reference - Absolute Imports and Module Path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)

## Static HTML Export

- [reference - Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export)
- `next build` - builds the app for production in the .next folder
- `next start` - start a Node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages
- `next export` - exports all your pages to static HTML files that you can server without the need of a Node.js server
  - Host the app on any static hosting service or a CDN without having to maintain a server
  - can NOT use `ISR` or `SSR`
  - [reference - unsupported features](https://nextjs.org/docs/advanced-features/static-html-export#unsupported-features)

## Typescript support

- [referenct - Next Typescript](https://nextjs.org/docs/basic-features/typescript)

### Next - js -> ts

1. create `tsconfig.json`
1. depend on the error message while run `next dev`, install `typescript` and `@typws/react` in devDependencies
1. `next dev` again, Next.js will automatically create `tsconfig.json` and `next-end.d.ts`
1. `jsconfig.json` doesn't work anymore -> use `tsconfig.json`, make sure rebuild the setting in `tsconfig.json`

## Preview Mode

Help application that rely on a CMS

Content Management System(CMS) is a tool that helps users create, manage, and modify content on a website without the need for specialized technical knowledge

### when to use preview mode

In the pre-rendering section, we understood about SSG where the pages are pre-rendered at build time. it's pretty useful when you r pages fetch data from a CMS

However, it's not suitable when you're createing a draft in your CMS and want to preview the draft changes immediately on your page

You want Next.js to bypass static generation for this scenario

You deploy your app and then when you make changes in your CMS, they won't be reflected as pages are only generated when you build the applicatioin

There was a need to handle this scenario of 'Preview of Publish' as I call it

### references

- [reference - preview mode](https://nextjs.org/docs/advanced-features/preview-mode)
- [reference - tutorial video](https://youtu.be/BYvH0G02uuI)

## Redirects

When to use

> - reorganizing the website, and urls have changed
> - the site is undergoing maintenance, and you want to temporarily redirect users to a different page

- [reference - redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)

## Environment Variables

create `.env.local` in the project root folder

- [reference - environment variables](https://nextjs.org/docs/basic-features/environment-variables)
- [reference - export variable to browser, add prefix: `NEXT_PUBLIC_`](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)
