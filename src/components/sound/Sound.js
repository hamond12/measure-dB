import "./Sound.css";
import Graph from "./Graph";

export default function Sound() {
  return (
    <>
      <div class="div-sound-title">소리측정</div>
      <div class="div-sound-info">
        <div>
          <p class="p-measure-noise">소음 측정</p>
          <div class="div-graph">
            <Graph />
          </div>
        </div>
        <div>
          <p class="p-current-noise">현재 측정</p>
          <div class="div-current-db">
            <p class="p-current-db">30dB</p>
          </div>
        </div>
      </div>
    </>
  );
}
