import React, { useState } from "react";

function Main() {
  const [num, setnum] = useState(1);
  const [newimg, setnewimg] = useState("./Images/0.jpeg");
  const [mnum, setmnum] = useState(0);
  const [aud, setaud] = useState("./Songs/" + mnum + ".mp3");
  let audio = new Audio(aud);

  function play() {
    audio.play();
  }

  function pause() {
    audio.pause();
  }

  function next() {
    setnum(num + 1);
    setnewimg("./Images/" + num + ".jpeg");
    setaud("./Songs/" + num + ".mp3");
    if (audio.paused != true) {
      audio.pause();
    }
    if (num >= 4) {
      setnewimg("./Images/4.jpeg");
      setaud("./Songs/4.mp3");
      setnum(4);
    }
  }

  function back() {
    if (num > 4) {
      setnewimg("./Images/4.jpeg");
      setaud("./Songs/4.mp3");
      setnum(4);
    }

    setnum(num - 1);
    console.log(num);
    setnewimg("./Images/" + num + ".jpeg");
    setaud("./Songs/" + num + ".mp3");
    if (audio.paused != true) {
      audio.pause();
    }
    if (num <= 0) {
      setnewimg("./Images/0.jpeg");
      setaud("./Songs/0.mp3");
      setnum(0);
    }
  }

  return (
    <div>
      <div className="box">
        <div className="cen">
          <h1>Music Player</h1>
          <div>
            <img src={newimg}></img>
          </div>
          <div className="buttons">
            <button onClick={back}>
              <i class="fas fa-backward"></i>
            </button>
            <button onClick={play}>
              <i class="fas fa-play"> </i>
            </button>
            <button onClick={pause}>
              <i class="fas fa-pause"></i>
            </button>
            <button onClick={next}>
              <i class="fas fa-forward"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
