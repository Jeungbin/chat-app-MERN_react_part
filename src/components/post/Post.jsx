import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
        <img src="/assets/person/1.jpeg" alt="" className="postProfileOmg" />
        <span className="postUsername">Han</span>
        <span className="postDate">8 Min Age</span>
        </div>
        <div className="postTopRight">
          <MoreVertIcon/>
        </div>
        </div>
        
        <div className="postCenter">
          <span className="postText">ok</span>
          <img className='postImg' src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png"  alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">people like it</span>
          </div>
          <div className="postBottomRight">
          <span className="postCommentText">11 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
