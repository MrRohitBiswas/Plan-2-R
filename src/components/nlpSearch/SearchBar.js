import React, { useState, useEffect } from "react";
import {useHistory, useParams} from "react-router-dom";
import './SearchBar.css'
import Resp from './Resp/Resp'
export default function SearchBar() {
   
    
  const [SearchText, setSearchText] = useState();

  const history = useHistory();

  const searchFunc = async (e) => {
    
    window.scrollTo(0, 0);
    e.preventDefault();
    history.push('/search/' + SearchText);
  };

  
  const startSpeechRecognition = (e) => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText(transcript)
      window.scrollTo(0, 0);
    history.push('/search/' + transcript);
      
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };
  return (
    <div>
     
      <h1 className="nlpsearchHeading">
        If you don't know exact place name, search using what you want in that place. Tour Cirkit will find most relevant places for your tour! <br />
        <br />

        We have added a graph with top places visited, so that you can have better knowledge of top tour places in India
      </h1>
      <p className="examples">
        For example,
        <br/>
        "Hill Views" <br/>
        "Sea Beaches" <br />
        "Historical Monuments" <br />
      </p>
      <div class="search-bar">
        <form action="" onSubmit={searchFunc}>

        <input type="text" placeholder="Sunrise View Points in..." onChange={(e) => setSearchText(e.target.value)} value={SearchText}/>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
        </form>
        
        <button
              onClick={startSpeechRecognition}
              style={{
                color: "white",
                border: "1px white solid",
                padding: "15px",
                margin: "30px",
              }}
              >
              
              Speak <i class="fa fa-microphone"></i>
            </button>
      </div>
        <Resp />
    </div>
  );
}
