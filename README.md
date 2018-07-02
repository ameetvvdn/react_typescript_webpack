# LEC POC

This is a LEC POC implementation in React.js using GraphQL(Relay) written in TypeScript.

# Architechture
React frontend component

- `./src/` 	folder for code 
- `./build/` 	for compiled version
- `./config/` for configuration
- `./.storybook/` for storybook configuration
- `./src/storybook/` for storybook files
- `./src/resourses/` for images and .less files
- `./src/@types/` for types definition files
- `./src/ui/` contains react components
- `./src/utils/` contains utility files

# Requirements
- Yarn/npm
 
## Setup

Install dependencies with yarn

```
$ yarn
```
Install dependencies with npm

```
$ npm install
```

To run in development mode use 
```
$ yarn start
```
To run ts lint 
```
$ npm run lint (or) $ yarn lint
```
To run run storybook
```
$ npm run storybook (or) $ yarn storybook
```

Server will be available on port [http://localhost:3000](http://localhost:3000).


## Production

Build server (JavaScript)

    npm run build
    
Run server
You may serve it with a static server:

  npm install -g serve
  
  serve -s build


## Storybook 
Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Development StoryBook
To run in development mode use (npm)
```
$ npm run start
``` 

To run storybook 
```
$ npm run storybook (or) $ yarn storybook
```

## Production StoryBook

Build server (JavaScript)

    npm run build-storybook
    
Run server
You may serve it with a static server:

  npm install -g serve
  serve -s storybook-static


## Relay

Relay schema is present in `./schema.graphql`. The main graphql endpoint is

    /graphql

To run relay compiler 
```
$ npm run relay (or) $ yarn relay
```
    
After running relay-compilier `./__generated__/` will be created in folder containing `graphql.ts` files.


## BizCharts
BizCharts is a React chart library based on G2 package. It has all the advantages of G2 and React. It allows users to combine countless charts in the form of components. It also integrates a large number of statistical tools, supports multiple coordinate system drawing, and interactive customization. Animation customization and graphic customization, and more. I believe BizCharts will be a powerful assistant for your data visualization project.

## Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
