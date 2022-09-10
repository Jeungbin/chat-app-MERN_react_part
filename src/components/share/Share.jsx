import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LivingIcon from '@mui/icons-material/Living';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder='What is in your mind?' className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo and Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <LivingIcon htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <InsertEmoticonIcon htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
                </div>
                <buttin className="shareButton">Share</buttin>        
            </div>
        </div>
    </div>
  )
}
