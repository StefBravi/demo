//import logo from './logo.svg';
import './App.css';
import CardList from './cardList';

const characters = [
  {name: 'Pickachu', type: 'electric'},
  {name: 'Gengar', type: 'ghost'},
  {name: 'Warturtle', type: 'water'},
  {name: 'Arcanine', type: 'fire'},

]

const animalsOrigin = [
  {name: 'Lion', place: 'Sabana Africana'},
  {name: 'Duck', place: 'Lagoon'},
  {name: 'Bear', place: 'Cánada'},
  {name: 'Dragon', place: 'China'}
]

 //01: 
function App() {

  const clickHandler = () => {
    alert('Hice un click')
  }

  return (
    <div className="App">
      <h1>Animals of the World!</h1>
      <CardList props={animalsOrigin} clickHandler={clickHandler}/>
        
    </div>
  );
}

export default App;
