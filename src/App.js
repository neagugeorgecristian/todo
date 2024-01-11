import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';
import StatisticsPage from './components/StatisticsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoWrapper />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;