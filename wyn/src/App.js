import './App.css';
import Survey from "../src/pages/survey";
import Header from "../src/components/header";
// import {Router} from 'react-router-dom';

function App() {
  return (
    // <Router>
    <div className="container-fluid">
      <Header/>
      <Survey/>
    </div>
    // </Router>
  );
}

export default App;
