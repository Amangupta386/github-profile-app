
import useProfileName from "../../hooks/useProfileName"; 

function ProfileName({userName}){
   
   
    
    const [profileName] = useProfileName(userName);
    console.log("hi",profileName);
    return (
        <div className="profile-name">
        Name: {profileName.name}<br/>

        image: <img src={profileName.avatar_url} alt="profile-img" /> <br />
        Followers: {profileName.followers}<br/>
        Following:{profileName.following}<br/>
        CompanyName: {profileName.company}<br/>
        </div>
    )
}
export default ProfileName;