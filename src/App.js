import logo from './logo.svg';
import './App.css';
import Title from './Components/Title/Title';
import Score from './Components/Score/Score'; 

function App() {
  return (
    <div className="App">
      <Title first={"Mathew"} last={"Chanda"}/> 
      <Score/>
    </div>
  );
}

export default App;
