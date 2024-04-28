# PHP + React 18 + Webpack

### How to use:
- Clone this repo
- Run `npm i` to install node modules
- Start code the react code or add some modules using `npm`

### Development
Change or add new tsx file (this repo is support typescript), and then use `npm start` to run development mode.

### How to build:
Use `npm run build` to generate the contents on public folder, to more specific index.php you can update first the src/template.php file first.

### Run PHP
The build will generate an index.php file on public folder, also scripts and css. After that you can use XAMPP or run php line
```bash
php -S localhost:8000 -t public
```

### Additional Setup
#### 1. Routing
You can setup routing by creating new page components inside of `src/pages/*`, and config your pages on `src/App.tsx`
```tsx
const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Home />} />,
        <Route path="about" element={<About />} />,
        // you can add new Route here and don't forget to append comma (,) to add one below it...
    ])
)
```

#### 2. REST API
Since this is not Next.js and it's using style of it but this one use PHP.

You can checkout the `public/api/*` folder to see how basic route to return REST JSON API using PHP, then you can try to access the route, for example:
```
GET http://localhost:8000/api/hello.php

the it will return:

{
  "message": "hello world"
}
```
the folder should not removed when using `npm run build` since I dont target the `api` folder on webpack.

---

this is inspired from [brawlins react-webpack-php-starter](https://github.com/brawlins/react-webpack-php-starter) repository, but since it was old (9 years old), so I try to recreate it.