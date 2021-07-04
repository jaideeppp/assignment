
import './App.css';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/TopNavbar';
import Home from './components/Home';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div >
      <Navbar />
      <div className="homeScreen">
        <SideNavbar />
        <Home />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
