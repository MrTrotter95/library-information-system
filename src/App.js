import './App.css';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route, useParams } from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Catalogue from './pages/Catalogue/Catalogue';
import Profile from './pages/Profile/Profile';

import AdminDashbord from './pages/AdminDashboard/AdminDashboard';
import AddBook from './pages/AddBook/AddBook';
import AdminCatalogue from './pages/AdminCatalogue/AdminCatalogue';
import LoanedBooks from './pages/LoanedBooks/LoanedBooks';
import OverdueBooks from './pages/OverdueBooks/OverdueBooks';
import EditBook from './pages/EditBook/EditBook';
import ViewUserProfiles from './pages/ViewUserProfiles/ViewUserProfiles';
import LoanHistory from './pages/LoanHistory/LoanHistory';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <main>
          <Routes>
            <Route 
            path='/Login'
            element={<Login/>}/>

            <Route
            path='/Signup'
            element={<Signup/>}/>

            <Route
            path='/'
            element={<Login/>}/>

            <Route 
            path='/Dashboard'
            element={<UserDashboard/>}/>
              
            <Route 
            path='/Catalogue'
            element={<Catalogue/>}/>
              
            <Route 
            path='/Profile'
            element={<Profile/>}/>

            <Route
            path='/AdminDash'
            element={<AdminDashbord/>}/>
            
            <Route 
            path='/AddBook'
            element={<AddBook/>}/>

            <Route 
            path='/AdminCatalogue'
            element={<AdminCatalogue/>}/>

            <Route 
            path='/LoanedBooks'
            element={<LoanedBooks/>}/>

            <Route
            path='/OverdueBooks'
            element={<OverdueBooks/>}/>

            <Route 
            path='/UserProfiles'
            element={<ViewUserProfiles/>}/>     

            <Route 
            path='/LoanHistory'
            element={<LoanHistory/>}/>  

            <Route 
            path='/EditBook/:bookId'
            element={<EditBook/>}/>    
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
