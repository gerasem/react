import style from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <p>Progress</p>
            <progress className="nes-progress is-pattern" value="28" max="100"></progress>
        </div>
    )
}
export default Footer;
