import DividerMobile from '../../Assets/imgs/pattern-divider-mobile.svg'
import DividerDesktop from '../../Assets/imgs/pattern-divider-desktop.svg'
import {useEffect, useState} from "react";

const Divider = (props) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [setWidth])

    return (
        <img className={props.className} src={width >= 560 ? DividerDesktop : DividerMobile} alt={"divider graphic"}/>
    )
}

export default Divider