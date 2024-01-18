import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bg from './BG.js';
import AddRobo from './AddRobo';

function App() {

  const [faculties, setFac] = useState([]);
  const [str, setStr] = useState("");
  const nav = useNavigate();

  // console.log(str);

  useEffect(() => {
    fetch("https://64dcce83e64a8525a0f72b97.mockapi.io/students")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFac(res);
      });
  }, []);

  let FormattedFac = faculties.map(fac => {
    var pattern = "" + str + "";
    var regex = new RegExp(pattern);

    var n = fac.fullName + "";
    console.log(n);
    if (regex.test(n.toUpperCase())) {
      return (<>
        <div class="card">
          {/* <img src={fac.image} class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">{fac.fullName}</h5>
            <Link to={"/Details/" + fac.ID} class="btn btn-primary">Go somewhere</Link>
          </div>
        </div >
      </>
      );
    }
  });

  return (
    <>
      <Bg />
      <div className='body'>
        <h1 className='name'>Robo Friends</h1>
        <input type='text' onChange={(e) => {
          let a = e.target.value.toUpperCase();
          console.log(a);

          setStr(a + "");
        }} />

        <div className='main'>
          {FormattedFac}
        </div>

        <button onClick={() => {
          nav('/AddRobo');
        }}>ADD ROBOT</button>
      </div >
    </>
  )
}


export default App;
