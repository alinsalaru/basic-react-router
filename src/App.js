import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, useParams, useLocation, useSearchParams } from "react-router-dom";

const Hello = () => (<h2>Hello world</h2>)

const Bye = () => (<div><h2>Bye!</h2> <Link to="/"> ET phoned home</Link> </div>)

const WhereAmI  = () => {
  const { place } = useParams();
  const location = useLocation();
  if(place) {
    return (<div>
      I am on: {place}
      </div>)
  }
  return <div>nowhere</div>
 
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello />}></Route>
          <Route path="/bye" element={<Bye />}></Route>
          <Route path="/whereami" element={<WhereAmI />}>
          <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
            <Route path=":place" element={<WhereAmI />} />
          </Route>
          <Route path="*" element={<div> 404 not found </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
