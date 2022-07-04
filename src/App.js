import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import LandingPage from './routes/LandingPage/LandingPage';
import ClothesPage from './routes/ClothesPage/ClothesPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/clothes' element={<ClothesPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//<a href="https://www.flaticon.com/free-icons/clothes-hanger" title="clothes hanger icons">Clothes hanger icons created by Icon Hubs - Flaticon</a> add to footer to credit icons
export default App;
