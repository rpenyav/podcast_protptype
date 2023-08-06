import PlayIcon from "../assets/svg/play.svg";
import TimerIcon from "../assets/svg/timericon.svg";
import ImageDummie from "../assets/images/albumdummy.png";

import "../styles/table.css";

const PodcastTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto custom-table">
        <thead>
          <tr>
            <th className="th-col1">#</th>
            <th className="th-col2">Title</th>
            <th className="th-col3">Topic</th>
            <th className="th-col4">Released</th>
            <th className="th-col5">
              <img src={TimerIcon} alt="timer" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-t border-b border-white th-col1">
              {/* <button className="play-pause-mini-paused">
                <img src={PlayIcon} alt="Play" />
              </button> */}
              <button className="play-pause-mini-played">
                <img src={PlayIcon} alt="Play" />
              </button>
            </td>
            <td className="border-t border-b border-white th-col2">
              <div className="flex justify-content-start align-items-center">
                <div>
                  <img src={ImageDummie} alt="dummie" />
                </div>
                <div className="ml-4">
                  <h5>Find topic that tou love</h5>
                  <p className="subtext">Ken Adams</p>
                </div>
              </div>
            </td>
            <td className="border-t border-b border-white th-col3">
              Discovering your true passion is an ...
            </td>
            <td className="border-t border-b border-white th-col4">
              an hour ago
            </td>
            <td className="border-t border-b border-white th-col5">08:12</td>
          </tr>
          <tr>
            <td className="border-b border-white th-col1">2</td>
            <td className="border-t border-b border-white th-col2">
              Another Title
            </td>
            <td className="border-b border-white th-col3">Another Topic</td>
            <td className="border-b border-white th-col4">last tuesday</td>
            <td className="border-b border-white th-col5">06:45</td>
          </tr>
          <tr>
            <td className="border-b border-white th-col1">3</td>
            <td className="border-t border-b border-white th-col2">
              Third Title
            </td>
            <td className="border-b border-white th-col3">Third Topic</td>
            <td className="border-b border-white th-col4">21/Jun</td>
            <td className="border-b border-white th-col5">12:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PodcastTable;
