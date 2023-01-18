// IMPORT: DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// IMPORT: BOOTSTRAP ELEMENTS
import { Container } from 'react-bootstrap';

// IMPORT: PAGES
import Home from './pages/Home.js';

// IMPORT: CSS
import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="*" element={<Home/>}/>
        </Routes>
      </Container>
    </Router>
   );
}

export default App;
