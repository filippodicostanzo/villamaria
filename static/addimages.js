function addImages() {

  var cache = {};
  const images = require.context('../static/images/gallery/restaurant/', false, /\.jpg$/);
  var imagesArray = Array.from(images.keys());
  var constructed = [];
  return constructItems(imagesArray, constructed);

  function constructItems(fileNames, constructed) {
    fileNames.forEach(fileName => {
      constructed.push({
        'src': '/images/gallery/restaurant' + fileName.substr(1)
      })
    });
    return constructed;
  }
}


export default addImages;
