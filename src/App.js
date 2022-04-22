import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const url = "https://randomuser.me/api"

    const fetchData = async () =>{
      console.log("in fetch")
      try{
        console.log("in try")
        const response = await fetch(url)
        const json = await response.json()
        setName(json.results[0].name.first)
        setImg(json.results[0].picture.large)
        setEmail(json.results[0].email)
        console.log(json.results[0].email)
      }catch(err){
        console.log("error" , err)
      }
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <div className='name'>
          <h1>
          Name :  {
              name
            }
          </h1>
        <div className='image_dash'>
              <img alt='' src={img} />
        </div>

        <div className="email">
              email : {
                email
              }
        </div>
      </div>
    </div>
  );
}

export default App;
