# Project Structure
```
.
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── api
│   └── index.tsx
├── public
│   ├── favicon.ico
│   └── vercel.svg
└── styles
    ├── Home.module.css
    └── globals.css

```

- [file]package.json
    - script
        - dev - run next app in a `development mode` with hot code reloading
        - build - compile next app and prepare it for production deployment
        - start - start the compiled application in `production mode`
        - lint - lint all the files in the application
- [file]next.config.js - next.js configuration file
- [file].eslintrc.json - configuration file for eslint
- [folder].next - generated when we run either the dev or the build scripts, it is from this folder that our next.js app is served from
- [folder]styles - contain styles for the app
- [folder]public - hold all the public resources for the app, not like the public folder of `create-react-app`. in next.js, all the html files are generated by next.js depending on the type of application we're building
- [folder]pages - responsible for the entire `routing feature` in the application
    - [folder]api - create api for the app
    - [file]_app.tsx - define the layout for the app

# control flow when we run the app
1. `$ yarn dev`
2. the execution is transferred to `_app.tsx`
3. `MyApp component` automaticall receieves properties: `{Component, pageProps}`, then returned as part of the `jsx`
4. navigate to `http://localhost:3000`, the component prop will refer to the component defined in `index.tsx` which is the `Home component`
