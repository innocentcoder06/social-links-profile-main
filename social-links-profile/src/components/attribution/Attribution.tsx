import './Attribution.scss';
import avatarNantha from '../../assets/images/avatar-nantha.jpg'



function Attribution() {

    function handleClick() {
        const content = document.querySelector(".attribution--content");
        if (content && !content.classList.contains("active")) {
            content.classList.add("active");
        } else {
            content && content.classList.remove("active");
        }
    }

    function resetAttribution() {
        const content = document.querySelector(".attribution--content");
        if (content && content.classList.contains("active")) {
            content.classList.remove("active");
        }
    }

    window.addEventListener("resize", resetAttribution);
    window.addEventListener("scroll", resetAttribution);
    window.addEventListener("click", (evt: MouseEvent) => {
        if (evt.target != document.querySelector("#attribution-click")) {
            resetAttribution();
        }
    });

    return (
        <div className="attribution">
            <img id="attribution-click" src={avatarNantha} alt="avatar" onClick={handleClick}/>
            <div className="attribution--content">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/innocentcoder06">Nanthagopal S</a>.
            </div>
        </div>
    );
}
    export default Attribution;