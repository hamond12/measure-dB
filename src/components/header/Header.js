import "./Header.css";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <div class="div-header-fixed">
        <div class="div-header">
          <Link to="/">
            <img class="logo" src="./img/logo.png" alt="logo"></img>
          </Link>
          <img class="sound" src="./img/sound.png" alt="sound"></img>
          <Link to="/sound-measure">
            <button class="btn-sound-measure">소리측정</button>
          </Link>
          <img class="dB" src="./img/dB.png" alt="dB"></img>
          <Link to="/dB-check">
            <button class="btn-dB-check">소음확인</button>
          </Link>
        </div>
      </div>
    </>
  );
}
