process.stdin.resume()
process.stdin.setEncoding('utf-8')

process.stdin.on('data', newString => {
  if (newString === 'Y\n') {
    console.log('You win, continue? [Y/N]')
  } else {
    console.log('You lost, continue? [Y/N]')
  }
})
