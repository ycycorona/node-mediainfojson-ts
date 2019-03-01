import childTask from './lib/childTask'
import * as fs from 'fs-extra'

childTask(
  'dir',
  []
)
.then(res => {
  fs.writeFile('./tmp.json', res)
  .then(data => {
      //console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    debugger
  })
})



