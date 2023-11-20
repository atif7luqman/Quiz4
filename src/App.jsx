import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css'
import Welcome from './components/Welcome';

function App() {

  return (
    <div className='main'>
      <Header />
      <Welcome />
    </div>
  )
}

export default App
