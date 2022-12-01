import Dice from '../../Assets/imgs/icon-dice.svg'

const DiceButton = (props) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            <img src={Dice} alt={'dice-button'}/>
        </div>
    )
}

export default DiceButton;