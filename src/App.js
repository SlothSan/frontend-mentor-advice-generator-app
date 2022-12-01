import './App.css';
import Container from "./Components/Container/Container";
import AdviceHeader from "./Components/AdviceHeader/AdviceHeader";
import {useEffect, useState} from "react";

function App() {
    const [advice, setAdvice] = useState();

  const fetchAdviceFromApi = async () => {
      const advice = await fetch('https://api.adviceslip.com/advice');
      const adviceJson = await advice.json();
      setAdvice(adviceJson.slip);
  }

  useEffect(() => {
      fetchAdviceFromApi()
  }, [])

  return (
    <div className="App">
      <Container className={"quote-container"}>
          {!advice ? "" :
              <AdviceHeader className={"advice-header"} adviceId={advice.id}/>
          }
      </Container>
    </div>
  );
}

export default App;
