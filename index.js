#!/usr/bin/env node

const fs = require('fs')
const readline = require('readline')
const pkg = require('./package')

const description =
  pkg.name + ' ' +
  'v' + pkg.version + ' ' +
  'by ' + pkg.author

process.title = description

function askQuery(message) {
  return new Promise(resolve => {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    interface.question(message, answer => {
      interface.close()

      resolve(answer)
    })
  })
}
function exit(opts) {
  console.log(opts.message)

  process.exit(opts.code)
}

console.log(description + '\n\n')

askQuery('Please type the template string: ')
  .then(templateString => {
    if (!templateString) {
      exit({
        message: 'Template string was not given!',
        code: 1
      })
    }

    askQuery('Please type the extension of the file to scan: ')
      .then(extension => {
        if (!templateString) {
          exit({
            message: 'File extension was not given!',
            code: 1
          })
        }

        const currentFiles = fs.readdirSync('.')
        const subFiles = currentFiles.filter(file => file.endsWith(extension))

        for (let i = 0; i < subFiles.length; i++) {
          const original = subFiles[i]
          const modified = templateString.replace(/{iter}/ig, String(i + 1).padStart(String(subFiles.length).length, '0'))

          console.log(
            'Updated file name:' +
            '\n  Original: ' + original +
            '\n  Modified: ' + modified
          )

          fs.renameSync(original, modified)
        }
      })
  })
