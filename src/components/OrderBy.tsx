import GlassLittle from "../assets/svg/glass_little.svg";
import Caret from "../assets/svg/caret_small.svg";

const OrderBy: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex">
        <button className="btn-small-search">
          <img src={GlassLittle} alt="Search" />
        </button>
      </div>
      <div className="flex ml-5 mr-2 select-label">Order by</div>
      <div className="flex">
        <div className="selected-option">
          <img src={Caret} alt="dropdown" />
        </div>
      </div>

      <div className="options-container">
        {/* {options.map(option => (
        <div key={option} onClick={() => setSelectedOption(option)}>
          {option}
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default OrderBy;
