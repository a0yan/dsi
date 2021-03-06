import './App.css';
import Navbar from './components/navbar/navbar'
import TopSection from './components/topsection/topsection'
import MidSection from './components/midsection/midsection'
import BottomSection from './components/bottomsection/bottomsection'
import ContactUs from './components/contactus/contactus'
import Footer from './components/footer/footer'
import Sliderbar from './components/sliderbar/sliderbar'
import './App.css'
function App() {
  return (
    <div className='App'>
    <Sliderbar/>
    <Navbar/>
    <TopSection/>
    <MidSection/>
    <BottomSection/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default (App);
