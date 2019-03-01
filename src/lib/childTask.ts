'use strict'
import * as spawn from 'cross-spawn'
import * as fs from 'fs-extra'

import * as child_process from 'child_process'

export default function (command: string, args: string[]=[], options: child_process.SpawnOptions={}): Promise<string | Error> {
  const childTask = spawn(command, args, options)
  const stdoutBufferArray: Buffer[] = []

  return new Promise((resolve, reject) => {
    childTask.stdout
    .on('data', (data: Buffer) => {
      stdoutBufferArray.push(data)
    })

    childTask
      .on('close', (code) => {
        console.log(`child process exited with code ${code}`)
        const resStr = Buffer.concat(stdoutBufferArray).toString()
        resolve(resStr)
      })
      .on('error', (err) => {
        console.log(err)
      })
  })
}
