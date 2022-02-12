import logo from "./logo.svg";
import "./App.css";
import Header from "./GlobalComponents/Header";
import StringConstant from "./asset/StringConstant";
import Footer from "./GlobalComponents/Footer";
import CourseList from "./Screen/CourseList";
import "./App.css";
import AboutUs from "./Screen/AboutUs";
// import { StringConstant } from './asset/StringConstant';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Header text={StringConstant.heading} />
        
        {/* <Routes> */}
          {/* <Route path="/" element={<CourseList />} /> */}
          {/* <Route path="about" element={<AboutUs />} /> */}
        {/* </Routes> */}
        <CourseList />
        <Footer text={StringConstant.footnote} />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
