import "./headerRight.css";
export default function HeaderRight() {
  return (
    <div className="header-right-body">
      <div className="right-option">
        <span class="material-icons-outlined">chat</span>
      </div>
      <div className="right-option">
        <span class="material-icons-outlined">voice_chat</span>
      </div>
      <div className="share-option">
        <span class="material-icons-outlined share-icon">lock</span>
        Share
      </div>
      <div className="account-symbol">Y</div>
    </div>
  );
}
