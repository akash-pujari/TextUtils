import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
/* import TextArea from './components/TextArea'; */

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <TextArea /> */}
      <About />
    </>
  );
}

export default App;
