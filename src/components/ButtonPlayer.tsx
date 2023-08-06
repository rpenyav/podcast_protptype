//import PlayIcon from "../assets/svg/play.svg";
import PauseIcon from "../assets/svg/pause.svg";

const ButtonPlayer: React.FC = () => {
  return (
    <div className="minim-ample">
      <button className="play-pause">
        {/* <PlayIcon /> */}

        <img src={PauseIcon} alt="Pause" className="playericons" />
      </button>
    </div>
  );
};

export default ButtonPlayer;
