import styles from "./zoomDrop.module.css";
export default function ZoomDropDown({ value,size, isInputEnabled }) {
  return (
    <div className={styles.btnCont}>
      <input type="text" value={value} className={size==='s'?styles.inputSizeS :styles.inputSizeM} disabled={!isInputEnabled}></input>
      <span class="material-icons toolbar-options-img">arrow_drop_down</span>
    </div>
  );
}
