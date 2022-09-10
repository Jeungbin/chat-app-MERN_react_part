import "./rightbar.css"
import  {Users} from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src='assets/gift.png' className="birthdayImg"></img>
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
      </div>
    </div>
  )
}
