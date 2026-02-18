import GithubLogo from "../icons/github.svg";
import EmailIcon from "../icons/email.svg";
import LinkedinLogo from "../icons/linkedin.svg";
import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://github.com/TangoCode99" target="_blank" rel="noreferrer">
                    <img src={GithubLogo} alt="github logo" />
                </a>
                <a href="https://www.linkedin.com/in/tango-nham/" target="_blank" rel="noreferrer">
                    <img src={LinkedinLogo} alt="linkedIn logo" />
                </a>
                <a href="mailto:jnham7@gmail.com" target="_blank" rel="noreferrer">
                    <img src={EmailIcon} alt="email logo" />
                </a>
            </div>
            <p className="copyright">TANGO NHAM &#169;2024</p>
        </footer>
    )
};