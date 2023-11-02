
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First_page from './components/first-page/First_page';
import Second_page from './components/second-page/Second_page';

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<First_page />} />
            <Route path='/2nd' element={<Second_page />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
