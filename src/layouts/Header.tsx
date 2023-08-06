import React from "react";
import VectorIcon from "../assets/svg/vector.svg";
import Glass from "../assets/svg/glass.svg";

interface HeaderProps {
  page: "PodcastView" | "PodcastSearch";
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="podcast-header">
      <header className="flex items-center justify-between pt-8 pb-5  bg-transparent">
        {page === "PodcastView" && (
          <button
            title="back"
            className="btn-custom-back flex justify-center items-center"
          >
            <img src={VectorIcon} alt="Back" />
          </button>
        )}
        <div
          className={`flex-grow ${
            page === "PodcastView"
              ? "custom-textfield"
              : "custom-textfield-searchf"
          } flex`}
        >
          <button className="btn-custom-search flex justify-center items-center">
            <img src={Glass} alt="Search" />
          </button>
          <input type="text" className="input-custom-search flex-grow" />
        </div>
      </header>
    </div>
  );
};

export default Header;
