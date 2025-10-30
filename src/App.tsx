import { type ParentProps } from 'solid-js';
import './App.css'
import BottomBar from './BottomBar';
import Navbar from './Navbar';

function App(props: ParentProps) {
  return (
    <>
      <Navbar/>
      <main>
        {props.children} 
      </main>
      <BottomBar/>
    </>
  );
}

export default App
