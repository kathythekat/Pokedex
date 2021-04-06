import './Pokecard.css';

const IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard(props) {
  const {id, name, type, base_experience} = props;

  return (
    <div className="pokecard-div">
      <h3>{name}</h3>
      <img src={`${IMAGE_URL}/${id}.png`} />
      <span> {type} </span>
      <span>EXP: {base_experience}</span>
    </div>
  );

}

export default Pokecard;