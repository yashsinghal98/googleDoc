import Header from "./components/header/header";
import ToolBar from "./components/toolBar/toolBar";
import TextEditor from "./components/textEditor/textEditor";
import SideBar from "./components/sideBar/sideBar";
import styles from "./googleDoc.module.css";
export default function GoogleDoc() {
  return (
    <div>
      <Header />
      <div className={styles.lowerPart}>
        <div className={styles.textPart}>
          <ToolBar />
          <TextEditor />
        </div>
        <div className={styles.rightSideBar}>
            <SideBar/>
        </div>
      </div>
    </div>
  );
}
