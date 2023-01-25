
import './App.scss';

import {Header,Services,Footer} from './container/index'

import {Navbar} from './components/index'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Services/>  
      <Footer/>
    </div>
  );
}

export default App;
