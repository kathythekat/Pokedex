import Pokecard from "./Pokecard";
import './Pokecard.css';

function Pokedex(props) {
  let winningMessage = props.totalEXP === props.isWinner ? "This hand is the winner!!!" : null
  console.log(props.totalEXP, "totalExp", props.isWinner);
  return (
    <div> 
      <div className="pokedex"> 
        {props.pokemon.map(pokemon => 
        <div className="pokecard">
          <Pokecard {...pokemon} />
        </div>)}
      </div>
      <div className="pokegame-totalEXP">TOTAL EXP: {props.totalEXP}</div>
      <div className="pokegame-totalEXP">{winningMessage}</div>
    </div>
  );
}

//<Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} />
//<Pokecard {...pokemon} />

Pokedex.defaultProps = { 
  pokemon:
  [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]
}

export default Pokedex;