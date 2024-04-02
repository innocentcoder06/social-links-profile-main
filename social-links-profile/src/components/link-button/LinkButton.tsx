import { useEffect, useState } from "react";
import { Social } from "../../types/profile.types";

interface LinkButtonProps {
    data: Social
    key: string,
}

function LinkButton(props: Readonly<LinkButtonProps>) {
    const [linkData, setLinkData] = useState<Social>({
        link: "",
        platform: "",
        text: "",
        id: ""
    });

    useEffect(() => {
        setLinkData(props.data);
    }, [props.data]);

    return (
        <li key={linkData.id} className="profile-card__list-item">
            <a href={linkData.link} data-text={linkData.text}>
                <span>{linkData.platform}</span>
            </a>
        </li>
    );

}

export default LinkButton;