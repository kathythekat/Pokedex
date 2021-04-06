function randomCard(Cards){
  let randIndex = Math.floor(Math.random() * Cards.length);
  return Cards[randIndex];
}

function splitCards(CardsArr){
  let hand1 = [];
  let cardSet = new Set();
  let i = 0;
  while(i < 4){
    let card = randomCard(CardsArr);
    if(!cardSet.has(card)){
      cardSet.add(card);
      hand1.push(card);
      i++;
    }
  }
  let hand2 = CardsArr.filter(card => {
    return !(hand1.includes(card))
    });

  return [hand1, hand2];
}

function sumCardsExp(handArr){
  let sum = 0;
  for (let card of handArr){
    sum += card.base_experience;
  }
  return sum;
}
export { randomCard, splitCards, sumCardsExp };