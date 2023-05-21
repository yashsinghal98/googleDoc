import GMeet from '../../../assets/images/meet.png'
import GMap from '../../../assets/images/maps.png'
import GContact from '../../../assets/images/contacts.png'
import styles from './sideBar.module.css'

export default function SideBar () {
    return (
        <div className={styles.sideBarCol}>
            <img src={GMeet}></img>
            <img src={GMap}></img>
            <img src={GContact}></img>
        </div>
    )
}