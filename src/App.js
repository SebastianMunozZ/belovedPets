import nosotros from './assets/images/nosotros.png';
import './assets/css/App.css';

import Header from './components/Header';
import Nosotros from './components/Nosotros';
import NuestrosVets from './components/NuestrosVets';
import AdminHoras from './components/AdminHoras';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="center">
        <section>
          <img src={nosotros} className="nosotros" alt="Logotipo" />
        </section>
        <Nosotros />
      </div>
      <div className='center'>
        <section>
        <NuestrosVets />
        <AdminHoras />
        </section>
        
      </div>
    </div>

  );
}

export default App;
