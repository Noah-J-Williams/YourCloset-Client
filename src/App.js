import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import LoginPage from './routes/LoginPage/LoginPage';
import RegisterPage from './routes/RegisterPage/RegisterPage';
import LandingPage from './routes/LandingPage/LandingPage';
import ClothesPage from './routes/ClothesPage/ClothesPage';
import AddPage from './routes/AddPage/AddPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/clothes' exact element={<ClothesPage />}/>
          <Route path='/clothes/add' element={<AddPage />}/>
          <Route path='/profile' element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//credit for icons tshirt and clothes hanger icons, I did not create them. All credit goes to the orinical artists
//<a href="https://www.flaticon.com/free-icons/clothes-hanger" title="clothes hanger icons">Clothes hanger icons created by Icon Hubs - Flaticon</a>
export default App;
