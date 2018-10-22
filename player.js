function createPlayer () {
  this.hand = []
  return {
    revealHand: () => {
      this.hand.forEach(console.log)
    },
    getMinSum: () => {
      return this.hand
        .sort((a, b) => {
          if (a.name === 'A') return Infinity
          if (a.value > b.value) return 1
          if (a.value < b.value) return -1
          return 0
        })
        .reduce((acc, curr) => {
          if (curr.name === 'A' && acc <= 10) {
            acc += curr.value[1]
          } else if (curr.name === 'A' && acc > 10) {
            acc += curr.value[0]
          } else {
            acc += curr.value
          }
          return acc
        }, 0)
    },
    addToHand: (card) => {
      this.hand.push(card)
    }
  }
}

module.exports = createPlayer
