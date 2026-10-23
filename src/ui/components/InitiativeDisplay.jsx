import CombatEntity from "./CombatEntity.jsx";
import DiceRoller from "./DiceRoller.jsx";
import {
    addInitiative,
    endTurn,
    getCurrentInitiative,
    initializeInitiative,
    nextInitiative,
    previousInitiative,
    removeInitiative,
    reRollEntityInitiative,
    setCombatInitiative,
    updateInitiativeModifier,
} from "../../logic/initiative.js";
import {useState} from "react";

export default function InitiativeDisplay({listOfCombatEntities}) {
    const [list, setList] = useState(() => initializeInitiative(listOfCombatEntities));
    const dummyEntity = { name: "New Entity", initiative: 20, initiativeModifier: 0, currentTurn: false };

    return (
        <div className="initiative-display">
            <button onClick={() => setList(setCombatInitiative(list))}>Sort Initiative</button>
            <div className="initiative-controls">
                <button onClick={() => setList(previousInitiative(list))}>Previous Turn</button>
                <button onClick={() => setList(nextInitiative(list))}>Next Turn</button>
                <button onClick={() => setList(addInitiative(list, dummyEntity))}>Add Entity</button>
            </div>
            <div className="initiative-list">
                {getCurrentInitiative(list) === undefined && (
                    <p>No active turn</p>
                )}
                {getCurrentInitiative(list) !== undefined && (<>
                    <p>Current turn: {getCurrentInitiative(list)}</p>
                        {list.map((entity, index) => (
                            <div key={index}>
                                <CombatEntity
                                    entity={entity}
                                    isCurrentTurn={entity.currentTurn}
                                    onClick={() => setList(endTurn(list))}
                                    onRemove={() => setList(removeInitiative(list, index))}
                                    onReroll={() => setList(reRollEntityInitiative(list, index))}
                                    onModifierChange={modifier => setList(updateInitiativeModifier(list, index, modifier))}
                                />
                            </div>
                        ))}
                </>
                )}
            </div>
            <DiceRoller/>
        </div>
    );
}
