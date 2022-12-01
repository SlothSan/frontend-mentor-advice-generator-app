import DividerMobile from '../../Assets/imgs/pattern-divider-mobile.svg'

const Divider = (props) => {
    return (
        <img className={props.className} src={DividerMobile} alt={"divider graphic"}/>
    )
}

export default Divider