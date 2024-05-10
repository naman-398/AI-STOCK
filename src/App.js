import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tradelong from './components/Tradelong';
import Stastics from './components/Stastics';
import Average from './components/Average';
import Take from './components/Take';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init(
      {once: true,
      duration : 1500,}
    );
  }, [])
  return (
    <div className=' overflow-hidden'>
<Tradelong/>
<Stastics/>
<Average/>
<Take/>
    </div>
  );
}

export default App;
