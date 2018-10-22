const DeckCreator = require('./deck')
const deck = new DeckCreator()
const PlayerCreator = require('./player')
const dealer = new PlayerCreator()
const player = new PlayerCreator()

process.stdin.resume()
process.stdin.setEncoding('utf-8')

console.log('Welcome to Black Jack')
console.log('Start the game? [Y/N]')

process.stdin.on('data', newString => {
  if (newString === 'Y\n') {

    deck.shuffle()

    const playerArray = [dealer, player]

    dealer.addToHand(deck.getCard())
    dealer.addToHand(deck.getCard())
    player.addToHand(deck.getCard())

    console.log(dealer.revealHand())
    console.log(dealer.getMinSum())
    console.log(player.revealHand())
    console.log(player.getMinSum())
  } else {
    console.log('Start the game? [Y/N]')
  }
})

process.on('SIGINT', () => {
  console.log('\nBye bye.')
  process.exit()
})
