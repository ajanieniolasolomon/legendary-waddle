<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/ajanieniolasolomon/news/master/demo/src/assets/logo.svg">
</p>

# news -  Angular news api

[![npm version](https://badge.fury.io/js/news.svg)](https://badge.fury.io/js/news),
[![Build Status](https://travis-ci.org/ajanieniolasolomon/news.svg?branch=master)](https://travis-ci.org/ajanieniolasolomon/news)
[![Coverage Status](https://coveralls.io/repos/github/ajanieniolasolomon/news/badge.svg?branch=master)](https://coveralls.io/github/ajanieniolasolomon/news?branch=master)
[![dependency Status](https://david-dm.org/ajanieniolasolomon/news/status.svg)](https://david-dm.org/ajanieniolasolomon/news)
[![devDependency Status](https://david-dm.org/ajanieniolasolomon/news/dev-status.svg?branch=master)](https://david-dm.org/ajanieniolasolomon/news#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/ajanieniolasolomon/news.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://ajanieniolasolomon.github.io/news

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `news-api` via:
```shell
npm install --save news-api-ajani@0.0.2
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `news-api`:
```js
map: {
  'news-api': 'node_modules/news-api/bundles/news-api.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'news-api';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'news-api';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'news-api';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 ajani eniola. Licensed under the MIT License (MIT)

