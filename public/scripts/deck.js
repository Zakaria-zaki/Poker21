
async function getNewDeckID() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    return data.deck_id;
   
}

async function getCard(deckID) {
  const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
  const response = await fetch(url);
  const data = await response.json()
  return data;
}