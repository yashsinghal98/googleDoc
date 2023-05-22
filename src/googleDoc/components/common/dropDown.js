import "./dropDown.css";
export default function Dropdown({ isOpen, setIsOpen, dropDownList }) {
  return (
    <div className={`dropdown-cont ${isOpen?'show-dropdown' :''}`}>
      {dropDownList &&
        Object.keys(dropDownList).map((item) => (
          <div className="dropdown-tab">
            <span className="left-side">
              <span className="img-ele-box">{dropDownList[item].imgEle}{" "}</span>
              <span className="tab-title">{item}</span>
            </span>
            <span class="material-icons image-color">arrow_right</span>
          </div>
        ))}
    </div>
  );
}
