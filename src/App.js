import logo from './logo.svg';
import './App.css';
import { Intropages } from './pages/insidepages/Intropage';
import { Routerapp } from './router/router';

export default function App() {
  return (
    <div >
      <Routerapp>
      <Intropages/>
      </Routerapp>
     
      
     
    </div>
  );
}


