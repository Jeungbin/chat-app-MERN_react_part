import "./rightbar.css"
import  {Users} from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return (
      <>
      <div className="birthdayContainer">
          <img src='assets/gift.png' alt='img' className="birthdayImg"></img>
          <span className="birthdayText">
            <b>Pola Poster</b> and <b>Three friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = ()=>{
    return (
      <>
       <h4 className='rightbarTitle'>User Infomation Title</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City : </span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From : </span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationshoip : </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
       </div>
       <h4 className='rightbarTitle'>User Friends</h4>
       <div className="righbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">ok</span>
        </div>
       </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar/>
      </div>
    </div>
  )
}
