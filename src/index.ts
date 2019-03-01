import childTask from './lib/childTask'

export default async function(filePath: string) {
  return await childTask(
    'MediaInfo',
    [filePath, '--Output=JSON']
  )
}
