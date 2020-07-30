const reqSvgs = require.context ('./assets', true, /\.svg$/ )

const svgs = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} )

console.log(svgs, '=====svg=====')

export default svgs;