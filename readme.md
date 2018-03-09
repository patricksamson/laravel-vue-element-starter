# Laravel Vue + Element UI Starter

## `bootstrap.js`
Only a cleanup is necessary here. Remove jQuera, Boostrap and any other things you do not use in your project.

## `app.js`
You will need to register your Vue components here.

## `package.json`
Remove the dependencies you do not need, such as bootstrap and jQuery.
Add the ones we want :
```bash
yarn add --dev axios vue element-ui
```


## `webpack.mix.js`
Simply use `mix.js()` as usual. It is possible to extract `Vue` and `Axios` in `vendor.js`, but not `element-ui`, as this will disable tree-shaking.

The `extract()` method works like this internally, and this explains how tree-shaking is not possible.
```js
import Axios from 'axios';
import Vue from 'vue';
import ElementUI from 'element-ui';
```

`webpack-bundle-analyser` can be used to analyse the contents of the compiled bundles. Comment it out when you don't need it.

## `.babelrc`
This file will automatically be loaded by Laravel Mix. It is required to enable tree-shaking of Element UI components.
If you do not need tree-shaking, you can remove this file and remove the dependencies :
```bash
yarn remove babel-plugin-component babel-preset-es2015
```

It is also possible to import a different theme by changing the path of the `styleLibraryName` variable.