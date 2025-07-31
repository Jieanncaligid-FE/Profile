import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Button from "./Button";

function Profile (){
    return(
    <div className="cmp-profile">
      <div>  
        <ProfilePicture />
        <AboutMe />
        <Skills />
        <Button />
      </div>  
    </div>
    )
}
export default Profile;