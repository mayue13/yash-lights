
import './App.scss';

import {About,Footer,Header,Skills,Work,Testimonials} from './container/index'

import {Navbar} from './components/index'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
