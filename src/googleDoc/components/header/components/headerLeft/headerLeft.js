import "./headerLeft.css";
import React , {useState} from "react";

export default function HeaderLeft() {
    const [titleDoc,setTitleDoc] = useState('');
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
            onInput={(e)=>{
                setTitleDoc(e.target.vale);
            }}
            value={titleDoc}
          ></input>
          <span class="material-icons-outlined">star_border</span>
        </div>
        <div>
          <div className="dropDownItems">
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Insert</div>
            <div>Format</div>
            <div>Tools</div>
            <div>Extensions</div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </div>
  );
}
