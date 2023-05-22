import "./headerLeft.css";
import React, { useState, useEffect } from "react";
import { dropDownTabs, dropDownItems } from "./constant";
import Dropdown from "../../../common/dropDown";
import { useRef } from "react";

export default function HeaderLeft() {
  const [titleDoc, setTitleDoc] = useState("");
  const [showDropDown,setShowDropDown]= useState(false);
  const wrapperRef = useRef(null);
  
  useEffect(()=>{
    const handleOutsideClick = (event)=>{
      if(wrapperRef?.current&&!wrapperRef.current?.contains(event.target)){
        onOutside(event);
      }
    }
    document.addEventListener('click',handleOutsideClick);
    return ()=>{
      document.removeEventListener('click',handleOutsideClick)
    }
  },[])

  const onOutside = () => {
    setShowDropDown(false);
  }


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
          <div className="dropDownItems" ref={wrapperRef}>
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
