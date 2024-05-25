import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadWeed from './components/CantidadWeed';
import CompraWeed from './components/CompraWeed';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <div className='row'>
        <div className='col-12'>
          <div className="card mt-5" style={{ maxWidth: '370px' }}>
            <div className="row no-gutters">
              <div className='col-4'>
              <img src={require('./img/bolsita.jpg')} alt="weed" className="card-img" />
              </div>
              <div className='col-8'>
                <div className='card-body'>
                  <div className='card-title h3 text-center'>
                    <CantidadWeed />
                  </div>
                  <CompraWeed/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
