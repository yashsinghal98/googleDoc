import HeaderLeft from "./components/headerLeft/headerLeft"
import HeaderRight from "./components/headerReight/headerRight"
import styles from './header.module.css'
export default function Header (){
    return (
        <div className={styles.headerBody}>
            <HeaderLeft/>
            <HeaderRight/>
        </div>
    )
}