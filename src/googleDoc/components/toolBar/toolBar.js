import { functionList } from './constant'
import './toolBar.css'
export default function ToolBar (){
   
    const renderList = () => {
        return functionList.map((fn)=>(
            typeof fn ==='string'? <span className='space'></span>
            :fn.isCustomEle?fn.element : <div key = {fn.id} className='child-element'>{fn.element}</div>
        ))
    }

    return (
    <div className='toolbar-outer'>
        <div className='toolbar-body'>
            {renderList()}
        </div>
    </div>
    )
}