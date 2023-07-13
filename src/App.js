import Google from './component/Google';
import './App.css';
import Buttons from './component/Buttons';

function App() {
  return (
    <div className='outer'>
      <div className="App">
        <Google/>
        <Buttons/>
      </div>
    </div>
  );
}

export default App;
