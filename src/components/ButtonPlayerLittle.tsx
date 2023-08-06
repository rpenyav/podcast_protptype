//import PlayIcon from "../assets/svg/play.svg";
import PauseIcon from "../assets/svg/pause.svg";

const ButtonPlayerLittle: React.FC = () => {
  return (
    <button className="play-pause-little">
      {/* <PlayIcon /> */}

      <img src={PauseIcon} alt="Pause" className="playericonslittle" />
    </button>
  );
};

export default ButtonPlayerLittle;
