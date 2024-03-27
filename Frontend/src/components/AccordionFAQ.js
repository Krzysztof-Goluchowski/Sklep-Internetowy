import React from "react";
import { Accordion } from 'react-bootstrap'
import leftImage from "../photos/faqphoto.webp";


const AccordionFAQ = () => {

    const accordionStyles ={
        width: '50vw',
        height: '90vh',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const photoStyles ={
        width: '50vw',
        height: '90vh',
        margin: 'auto',
        textAlign: 'right',
    };

    const containerStyles ={
        display: 'flex',
    }

    const h1Style ={
        textAlign: 'center',
        margin: '10px',
        // display: 'flex',
    }

    const justPhoto ={
        height: '100%',
    }
    return(

        <div style={containerStyles}>
            <div style={photoStyles}>
                <img src={leftImage} style={justPhoto}/>
            </div>

            <div style={accordionStyles}>
                <h1 style={h1Style}>Często zadawane pytania</h1>
                <Accordion>
                    <Accordion.Item eventKey={1}>
                        <Accordion.Header><strong>Pytanie 1: Jakie korzyści przynoszą suplementy na siłownię?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementy na siłownię mogą pomóc w uzupełnieniu brakujących składników odżywczych, wspierając procesy regeneracyjne, zwiększając energię i przyspieszając osiągnięcie celów treningowych.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={2}>
                        <Accordion.Header><strong>Pytanie 2: Które suplementy najlepiej wspierają proces budowy masy mięśniowej?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementy białkowe, takie jak odżywki białkowe lub aminokwasy rozgałęzione (BCAA), są często stosowane do wspomagania procesu budowy masy mięśniowej. Odpowiednia dieta oraz suplementacja mogą działać synergistycznie.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={3}>
                        <Accordion.Header><strong>Pytanie 3: Jak dobrać odpowiedni karnet na siłownię dla swoich potrzeb?</strong></Accordion.Header>
                        <Accordion.Body>
                            Wybór karnetu zależy od celów treningowych i preferencji osobistych. Karnety mogą obejmować dostęp do różnych rodzajów zajęć, dostępność sprzętu, oraz godziny otwarcia, więc warto zastanowić się, co jest dla Ciebie najważniejsze.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={4}>
                        <Accordion.Header><strong>Pytanie 4: Czy stosowanie suplementów może zastąpić zdrową dietę?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementy są uzupełnieniem diety, ale nie mogą zastąpić zdrowego i zrównoważonego odżywiania. Ważne jest, aby spożywać różnorodne, pełnowartościowe posiłki i używać suplementów w celu uzupełnienia brakujących składników odżywczych.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={5}>
                        <Accordion.Header><strong>Pytanie 5: Jakie suplementy mogą pomóc w poprawie wydolności podczas treningów?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementy, takie jak kreatyna czy beta-alanina, są znane ze swojej zdolności do poprawy wydolności sportowej. Przed użyciem jakichkolwiek suplementów, zawsze warto skonsultować się z profesjonalistą lub lekarzem.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={6}>
                        <Accordion.Header><strong>Pytanie 6: Jakie suplementy mogą pomóc w procesie regeneracji po intensywnym treningu?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementy, takie jak kreatyna, glutamina czy białka serwatkowe, są znane ze swojej roli w procesie regeneracji mięśni po intensywnym treningu, pomagając skrócić czas powrotu do pełnej sprawności.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={7}>
                        <Accordion.Header><strong>Pytanie 7: Czy istnieją suplementy odpowiednie dla osób na diecie wegańskiej?</strong></Accordion.Header>
                        <Accordion.Body>
                            Tak, istnieje wiele suplementów dostępnych dla osób na diecie wegańskiej, w tym odżywki roślinne, białka roślinne, witaminy B12 i kwas omega-3 z alg. Warto wybierać produkty bez składników pochodzenia zwierzęcego.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={8}>
                        <Accordion.Header><strong>Pytanie 8: Czy suplementacja jest bezpieczna dla wszystkich?</strong></Accordion.Header>
                        <Accordion.Body>
                            Suplementacja może być bezpieczna, ale zawsze warto skonsultować się z lekarzem przed rozpoczęciem nowego programu suplementacji, zwłaszcza jeśli masz istniejące problemy zdrowotne lub przyjmujesz inne leki.
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionFAQ;