import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';

import { RegisterPage } from './pages/Register';
import { DashboardPage } from './pages/Dashboard';
import LoginPage from './pages/Login';






function App() {
  return (
    <Router>
      <Link to='/'>dashboard</Link>
      <Routes>
        {/* <Route to='/login' element={<LoginPage />} />
        <Route to='/register' element={<RegisterPage />} /> */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
