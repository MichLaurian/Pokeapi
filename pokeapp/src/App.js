
import './App.css';
import Cards from './Cards/Cards';
import PrincipalBar from './PrincipalBar/PrincipalBar';

function App(props) {
  return (
    <div className="">
      <header className="header">
        <PrincipalBar title="Pokemon Api"/>
      </header>
     <div>
        <Cards></Cards>
     </div>
    </div>
  );
}

export default App;
