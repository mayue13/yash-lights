
import './App.scss';

import {Header,Services} from './container/index'

import {Navbar} from './components/index'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Services/>  
    </div>
  );
}

export default App;
