import React, { Component } from 'react';
import './App.css';



  class App extends Component {
    state = {
      response: []
    };

    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response: res.img }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
      const response = await fetch('/pictures');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };

  render() {

    const pics = this.state.response;

    return (
      <div className="App">

          <div className="intro">
            <p>
            To thyssenkrupp Elevator:<br /><br />
            Goodbyes are inherently hard. Leaving a group of people you have come to respect, appreciate and even love being around is even more difficult. I walked into my interview four years ago not really knowing what to expect from this large corporate company. "Do I have to wear slacks? Why is that guy wearing a jacket? Did he just come from church? On a Monday? This place may be a little too stuffy for me." But my pre-conceived ideas were wrong and I have never felt more at home anywhere else I've worked.<br /><br />
            While four years doesn't seem that long, some of the most important memories in my life happened while working with all of you. We experienced the birth of our first child, family weddings, funerals for loved ones, huge project wins, fun team parties and almost everything else imaginable. I shared all of those experiences with most of you. That has left a profound impact on my life. My hope is that through our everyday conversations, jokes (lots of them), events, victories and failures I have made at least the a small impact on some of you.<br /><br />
            As I move on to my next challenge, I take all the memories, experiences, lessons learned and try to build upon them. I wish I could put into words how much you have meant to me, but that isn't possible. You have all been a huge part of my life, and that isn't something you just move on from instantly. My time at thyssenkrupp will forever be part of me, it has helped mold who I am. I wanted to share with all of you just a handful of the memories and experiences we've shared. Scroll down and enjoy the memories we've shared.<br/><br />
            Thank you, Thank you, Thank you.<br /><br/>
            Matt Taylor
            </p>
          </div>

          <div className="gallery">

          {pics.map(function(pic, index){


            if (pic.search('m4v') > 0) {

              return <video key={index} playsInline src={`img/${pic}`} controls></video>

            } else {

            return (
              <img className="photo" key={index} src={`img/${pic}`} alt="something" />
              )
            }
          })}

          </div>

      </div>
    );
  }
}

export default App;
