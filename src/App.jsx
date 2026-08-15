import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import  HomePage  from './Pages/HomePage'
import  GamePage  from './Pages/GamePage'
function App() {
 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/" element={<GamePage />} />
      </Routes>
    </Router>
    );
  
}

export default App
