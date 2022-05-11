
import './App.css';
import Uniform from './Uniform';
import Books_Equipment from './Books_Equipment';
import NameAddress from './NameAddress';


function App() {
  return (
    <div className="App">
      <NameAddress/>
      <Uniform/> 
      <Books_Equipment/>
      {/* <ApplicationForm/> */}
    </div>
  );
}

export default App;