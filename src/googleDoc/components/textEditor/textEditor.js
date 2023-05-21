import LeftPart from './leftPart/leftPart'
import RightPart from './rightPart/rightPart'
import './textEditor.css'
export default function TextEditor(){
    return (
        <div className='text-editor-body'>
            <LeftPart/>
            <RightPart/>
        </div>
    )
}