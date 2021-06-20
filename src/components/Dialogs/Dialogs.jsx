import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className="columns">
            <div className={style.dialogs}>
                <div className="nes-container is-dark with-title">
                    <p className="title">Dialogs</p>
                    <div className="lists">
                        <ul className={`nes-list is-disc ${style.dialog}`}>
                            <li>
                                <a className={style.active} href="">Adrian</a>
                            </li>
                            <li>
                                <a href="">Ann</a>
                            </li>
                            <li>
                                <a href="">Oleg</a>
                            </li>
                            <li>
                                <a href="">Administrator</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="column-main column-main-offset-left">
                <div className="nes-container with-title">
                    <p className="title">Message</p>
                    <p className="nes-balloon from-left nes-pointer">
                        This is not a clickable element, but it's an area of the pointer.
                    </p>

                    <p className="nes-balloon from-left nes-pointer">
                        This is not a clickable element, but it's an area of the pointer.
                    </p>

                    <p className="nes-balloon from-left nes-pointer">
                        This is not a clickable element, but it's an area of the pointer.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default Dialogs;
