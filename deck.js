

function createDeck () {
  function getFreshDeck () {
    function cardMaker (name) {
      const value = name === 'A'
        ? [1, 11]
        : name === 'J' || name === 'Q' || name === 'K'
          ? 10
          : name
      return {
        name,
        value
      }
    }
    return ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'] 
      .map(cardMaker)
      .map(card => [{ ...card }, { ...card }, { ...card }, { ...card }])
      .reduce((acc, curr) => {
        acc = acc.concat(curr)
        return acc
      }, [])
  }
  this.deck = getFreshDeck()

  return {
    shuffle: () => {
      for (let currentIndex = this.deck.length - 1; 0 < currentIndex; currentIndex--) {
        const swapIndex = Math.floor(Math.random() * (currentIndex + 1))
        const currentItem = this.deck[currentIndex]
        this.deck[currentIndex] = this.deck[swapIndex]
        this.deck[swapIndex] = currentItem
      }
    },
    getDeck: () => {
      return this.deck
    },
    getCard: () => {
      return this.deck.pop()
    },
    reshuffle: () => {
      this.deck = getFreshDeck()
    }
  }
}

module.exports = createDeck
