import React from "react";
import DemoDummie from "../assets/images/demodummie2.png";
import PlayerAleatorio from "../assets/svg/player_aleatorio.svg";
import PlayerLeft from "../assets/svg/player_left.svg";
import PlayerRight from "../assets/svg/player_right.svg";
import PlayerReload from "../assets/svg/player_reload.svg";
import PlayerVolume from "../assets/svg/player_volume.svg";
import "../styles/player.css";
import ButtonPlayerLittle from "components/ButtonPlayerLittle";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full h-[110px] z-50 bg-custom-gray flex items-center">
      <div className="podcast-face min-w-[437px] flex items-center">
        <div
          className="podcast-imagen w-[110px] h-[110px]"
          style={{
            backgroundImage: `url(${DemoDummie})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="podcast-content flex-auto pl-5">
          <h5>How to make your partner talk more</h5>
          <p>Ken Adams</p>
        </div>
      </div>
      <div className="podcast-player-footer flex-auto">
        <div className="aleat flex justify-center">
          <img src={PlayerAleatorio} alt="Player Aleatorio" />
        </div>
        <div className="start flex justify-center">
          <img src={PlayerLeft} alt="Player Left" />
        </div>
        <div className="boton  flex justify-center">
          <ButtonPlayerLittle />
        </div>
        <div className="end flex justify-center">
          <img src={PlayerRight} alt="Player Right" />
        </div>
        <div className="upload flex justify-center">
          <img src={PlayerReload} alt="Player Reload" />
        </div>

        <div className="timer">
          <div className="timeleft">01:03:40</div>
          <div className="progressline">Progress Line Content</div>
          <div className="timeend">01:03:40</div>
        </div>

        <div className="volume flex justify-center">
          <img src={PlayerVolume} alt="Player Volume" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
