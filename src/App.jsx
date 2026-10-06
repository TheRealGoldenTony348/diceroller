import './App.css'
import InitiativeDisplay from "./ui/components/InitiativeDisplay.jsx";


function App() {
    const dummyData = [
        { name: "Goblin", initiative: 15, currentTurn: false },
        { name: "Orc", initiative: 12, currentTurn: false },
        { name: "Elf", initiative: 18, currentTurn: true },
        { name: "Dwarf", initiative: 10, currentTurn: false },
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
