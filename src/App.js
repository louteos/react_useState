import { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'

function App() {
  const [ cls, clsfun ] = useState(true);
  
  return (
    <div className="App d-flex justify-content-end">
      <button onClick={(e) => { clsfun(!cls); console.log(e.target) }}
        className={`border-0 bg-white ${cls? "bi bi-list":"bi bi-x-lg"}`}>
          <div className="visually-hidden">전체메뉴</div>
      </button>
      <div id="gnb" className="position-fixed w-100 bg-dark">
        <ul>
          <li><a href="" className="text-white">메뉴</a></li>
          <li><a href="" className="text-white">메뉴</a></li>
          <li><a href="" className="text-white">메뉴</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
