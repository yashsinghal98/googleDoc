import "./headerLeft.css";
import React, { useState } from "react";
import { dropDownTabs, dropDownItems } from "./constant";
import Dropdown from "../../../common/dropDown";

export default function HeaderLeft() {
  const [titleDoc, setTitleDoc] = useState("");
  const [showDropDown,setShowDropDown]= useState(false);
  return (
    <div className="body">
      <div className="leftImgCont">
        <span class="material-icons  leftImgCont-img">description</span>
      </div>
      <div>
        <div className="name-box">
          <input
            type="text"
            placeHolder="Untitled Document"
            className="doc-title"
            onInput={(e) => {
              setTitleDoc(e.target.vale);
            }}
            value={titleDoc}
          ></input>
          <span class="material-icons-outlined">star_border</span>
        </div>
        <div>
          <div className="dropDownItems">
            {dropDownItems.map((item, index) => (
              <div key={index} className="title-dropdown" onClick={()=>setShowDropDown(index)}>
                {item}
                <Dropdown
                  dropDownList={dropDownTabs[item]}
                  isOpen={showDropDown===index}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
