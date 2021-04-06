import Pokedex from "./Pokedex";
import {splitCards, sumCardsExp }  from "./helpers";

let PokemonArr = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];

function Pokegame(props){
  let [hand1, hand2] = splitCards(PokemonArr);
  console.log(hand1, hand2);
  let sumHand1 = sumCardsExp(hand1);
  let sumHand2 = sumCardsExp(hand2);
  let winner = sumHand1 > sumHand2 ? sumHand1 : sumHand2;

  return(
    <div>
        <Pokedex pokemon={hand1} totalEXP={sumHand1} isWinner ={winner}/>
        <Pokedex pokemon={hand2} totalEXP={sumHand2} isWinner ={winner}/>
    </div>
  );
}


export default Pokegame;

