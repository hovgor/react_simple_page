import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import  RegisterPage  from './pages/Register';
import LoginPage from './pages/Login';
import {Layout} from './components/Layout'
import { HomePage } from './pages/Home';
import { DashboardPage } from './pages/Dashboard';





function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={<HomePage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path="login" element={<LoginPage/>}/>
          <Route path="dashboard" element={<DashboardPage/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
