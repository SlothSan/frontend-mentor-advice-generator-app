import './App.css';
import Container from "./Components/Container/Container";
import AdviceHeader from "./Components/AdviceHeader/AdviceHeader";
import {useEffect, useState} from "react";
import AdviceText from "./Components/AdviceText/AdviceText";
import Divider from "./Components/Divider/Divider";
import DiceButton from "./Components/DiceButton/DiceButton";

function App() {
    const [advice, setAdvice] = useState();

    const fetchAdviceFromApi = async () => {
        const advice = await fetch('https://api.adviceslip.com/advice');
        const adviceJson = await advice.json();
        setAdvice(adviceJson.slip);
    }

    const handleDiceClick = () => {
        fetchAdviceFromApi();
    }

    useEffect(() => {
        fetchAdviceFromApi()
    }, [])

    return (
        <div className="App">
            <Container className={"quote-container"}>
                {!advice ? "" :
                    <>
                        <AdviceHeader className={"advice-header"} adviceId={advice.id}/>
                        <AdviceText className={"advice-text"} advice={advice.advice}/>
                        <Divider className={"mobile-divider"}/>
                        <DiceButton className={"dice-button"} onClick={handleDiceClick}/>
                    </>
                }
            </Container>
        </div>
    );
}

export default App;
