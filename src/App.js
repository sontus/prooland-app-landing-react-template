import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeOne from './Components/Pages/HomeOne/HomeOne';
import HomeTwo from './Components/Pages/HomeTwo/HomeTwo';
import HomeThree from './Components/Pages/HomeThree/HomeThree';
import HomeFour from './Components/Pages/HomeFour/HomeFour';
import About from './Components/Pages/About/About';
import Feature from './Components/Pages/Feature/Feature';
import Blogs from './Components/Pages/Blogs/Blogs';
import BlogDetails from './Components/Pages/BlogDetails/BlogDetails';
import Contact from './Components/Pages/Contact/Contact';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Faq from './Components/Pages/Faq/Faq';



function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomeOne/>}></Route>
        <Route  path='/home-two' element={<HomeTwo/>}></Route>
        <Route  path='/home-three' element={<HomeThree/>}></Route>
        <Route  path='/home-four' element={<HomeFour/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route  path='/feature' element={<Feature/>}></Route>
        <Route  path='/blog' element={<Blogs/>}></Route>
        <Route  path='/blog-details' element={<BlogDetails/>}></Route>
        <Route  path='/faq' element={<Faq/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
