import { type ParentProps } from 'solid-js';
import BottomBar from './components/BottomBar';
import TopBar from './components/TopBar';

function App(props: ParentProps) {
  return (
    <div class="flex flex-col min-h-screen w-screen text-center">
      <TopBar />

      <main class="flex flex-col flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        {props.children}
      </main>
      
      <BottomBar />
    </div>
  );
}

export default App;