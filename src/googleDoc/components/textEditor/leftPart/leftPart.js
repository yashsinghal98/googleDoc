import React, { useState } from "react";
import "./leftPart.css";
export default function LeftPart() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="left-part-body">
      {!isOpen ? (
        <div
          className="show-document-outlineImgCont"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span class="material-icons-outlined showOutline-img">
            format_list_bulleted
          </span>
        </div>
      ) : (
        <div className="document-shown">
          <div
            className="show-document-outlineImgCont"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span class="material-icons-outlined showOutline-img">
              arrow_back
            </span>
          </div>
          <div className="summary-cont">
            <div>Summary</div>
            <div>
              <span class="material-icons-outlined">add</span>
            </div>
          </div>
          <br />
          <div className="outline-text">Outline</div>
          <br />
          <div className="outline-description">
            Heading you add to the document will appear here
          </div>
        </div>
      )}
    </div>
  );
}
