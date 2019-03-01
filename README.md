# node-mediainfojson-ts


## example

``` js
  const mediainfo = require('./dist/index').default

  const path = 'E:\\xxx.mp4'
  mediainfo(path)
  .then(res => {
      console.log(res)
  })
```
