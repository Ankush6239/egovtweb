import Header from "./components/Header";
import Slidr from "./components/Slidr";
import  "./components/nav.css";
function App() {
  return (
    <>
    
    <Header
    Navbar="./components/logo.png"
    Home ="Home"
    F="Pages"
    Pricing="Departments"
    Pri="Events"
    Pr="News"
    P="Portfolio"
    P1="Contact"
    eng="Eng"
    fre="Fre"
    ara="Ara"
    Primary="Report An Issues"
    />
   <Slidr/>
    </>
  );
}

export default App;
