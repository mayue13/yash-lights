
import './App.scss';

import {Header,Skills} from './container/index'

import {Navbar} from './components/index'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Skills/>  
    </div>
  );
}

export default App;
