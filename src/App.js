import logo from './logo.svg';
import './App.css';
import Header from './GlobalComponents/Header';
import StringConstant from './asset/StringConstant';
import Footer from './GlobalComponents/Footer';
import CourseList from './Screen/CourseList';
import './App.css'
// import { StringConstant } from './asset/StringConstant';

function App() {
  return (
    <div className="App">
      <Header text={StringConstant.heading} />
      <CourseList />
      <Footer text={StringConstant.footnote}/>
    </div>
  );
}

export default App;
