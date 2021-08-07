import '../App.css'
import Aside from "../components/aside/Aside";
// import Aside2 from '../components/aside/Aside2'  
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsfeed from "../components/newsfeed/Newsfeed";

function App() {
  return (
    <div className="wrapper">
      {/* <div><Aside2/></div> */}
      
      <div className='header'>
        <Navbar />
      </div>
      <div className='content'><Newsfeed/></div>
      
      <div className='sidebar'><Aside/></div>
      <div className='footer'><Footer/></div>


    </div>
  );
}

export default App;
