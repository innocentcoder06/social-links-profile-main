import ProfileCard from "./components/profile-card/ProfileCard";
import { Profile } from "./types/profile.types"
import avatarNantha from './assets/images/avatar-nantha.jpg'
import Attribution from "./components/attribution/Attribution";

function App() {

  const profileData: Profile = {
    avatar: avatarNantha,
    name: 'Nanthagopal Sivanu',
    location: 'Tamilnadu, India',
    role: '"Full Stack Developer and gamer."',
    socialLinks: [{
      platform: "Github",
      text: "innocentcoder06",
      link: "https://github.com/innocentcoder06",
      id: 'social1'
    }, {
      platform: "Frontend Mentor",
      text: "innocentcoder06",
      link: "https://www.frontendmentor.io/profile/innocentcoder06",
      id: 'social2'
    }, {
      platform: "LinkedIn",
      text: "nanthagopals06",
      link: "https://www.linkedin.com/in/nanthagopals06/",
      id: 'social3',
    }, {
      platform: "Instagram",
      text: "nanthagopal.sivanu",
      link: "https://www.instagram.com/nanthagopal.sivanu/",
      id: 'social4'
    }]
  };

  return (
    <>
      <ProfileCard data={profileData}/>
      <Attribution/>
    </>
  )
}

export default App
