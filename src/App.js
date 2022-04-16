import './App.css';
import Header from "../src/Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";


const App = () => {
  return (
      <div className={"wrapper"}>
            <Header/>
            <Sidebar />
            <Main/>
            <Footer/>
      </div>

);
}

export default App;
