import { type ParentProps } from 'solid-js';
import './App.css'
import BottomBar from './BottomBar';
import Navbar from './Navbar';

function App(props: ParentProps) {
  return (
    <div class="App">
      <Navbar/>
      <main>
        {props.children} 
      </main>
      <BottomBar/>
    </div>
  );
}

export default App
