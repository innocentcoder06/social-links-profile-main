import { useEffect, useState } from "react";
import { Profile, Social } from "../../types/profile.types";
import LinkButton from "../link-button/LinkButton";
import './ProfileCard.scss';

interface ProfileCardProps {
    data: Profile
}

function ProfileCard(props: Readonly<ProfileCardProps>) {
    const [profile, setProfile] = useState<Profile>({
        avatar: "",
        location: "",
        name: "",
        socialLinks: [],
        role: ""
    });
    useEffect(() => {
        setProfile(props.data);
    }, [props.data]);

    return (
        <div className="profile-card">
            <div className="profile-card__avatar">
                <img src={profile.avatar} alt={profile.name}></img>
                <h4>{profile.name}</h4>
                <h6>{profile.location}</h6>
                <p>{profile.role}</p>
            </div>
            <div className="profile-card__social">
                <ul className="profile-card__list">
                    {
                        profile.socialLinks?.map((link: Social) => {
                            return (<LinkButton key={link.id} data={link}/>)
                        })
                    }
                </ul>
            </div>
        </div>
    );

}

export default ProfileCard;