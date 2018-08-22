# wigle2geojson

> Convert [WiGLE API](https://api.wigle.net/swagger) format to [GeoJSON](http://geojson.org/)

## Install

``` bash
$ npm install wigle2geojson
```

```js
import wigleToGeojson from 'wigle2geojson';
//or
const wigleToGeojson = require('wigle2geojson');

let geojsonCollection = wigleToGeojson(wigleApiResponse);
```