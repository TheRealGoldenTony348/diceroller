import './App.css'
import InitiativeDisplay from "./ui/components/InitiativeDisplay.jsx";


function App() {
    // Initiative is the base roll; the tracker adds initiativeModifier once.
    const dummyData = [
        { name: "Goblin", initiative: 15, initiativeModifier: 2, currentTurn: false },
        { name: "Orc", initiative: 12, initiativeModifier: 1, currentTurn: false },
        { name: "Elf", initiative: 18, initiativeModifier: 3, currentTurn: true },
        { name: "Dwarf", initiative: 10, initiativeModifier: -1, currentTurn: false },
    ];


    return (
        <>
            <section id="center">
                <InitiativeDisplay listOfCombatEntities={dummyData}/>

            </section>
        </>
    )
}

export default App
