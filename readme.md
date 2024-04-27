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

this is inspired from [brawlins react-webpack-php-starter](https://github.com/brawlins/react-webpack-php-starter) repository, but since it was old (9 years old), so I try to update it.