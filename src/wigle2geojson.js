const objectExcludeKeys = (object, keys) => {

  let {...cloneObject} = object;
  keys.forEach(key => delete cloneObject[key]);
  return cloneObject;

}


export default (wigleApiResponse, excludeKeys = []) => {

  var features = wigleApiResponse.results.map(wigleItem => ({
    type: 'Feature',
    geometry: {type: 'Point', coordinates: [wigleItem.trilong, wigleItem.trilat]},
    properties: objectExcludeKeys(wigleItem, ['trilong','trilat', ...excludeKeys]),
  }));

  var geojson = {
    type: 'FeatureCollection',
    features,
  }

  return geojson;

}
