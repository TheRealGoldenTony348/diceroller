import CombatEntity from "./CombatEntity.jsx";
import {
    addInitiative,
    endTurn,
    getCurrentInitiative,
    handleInitiative,
    nextInitiative,
    previousInitiative, removeInitiative
} from "../../logic/initiative.js";
import {useEffect, useState} from "react";

export default function InitiativeDisplay({listOfCombatEntities}) {
    const [list, setList] = useState(listOfCombatEntities);
    const dummyEntity = { name: "New Entity", initiative: 20, currentTurn: false };

   useEffect(() => {
        handleInitiative(list);
    }, [list]);
    return (
        <div className="initiative-display">
            <div className="initiative-controls">
                <button onClick={() => setList(previousInitiative(list))}>Previous Turn</button>
                <button onClick={() => setList(nextInitiative(list))}>Next Turn</button>
                <button onClick={() => setList(addInitiative(list, dummyEntity))}>Add Entity</button>
            </div>
            <div className="initiative-list">
                {getCurrentInitiative(list) === -1 && (
                    <p>No active turn</p>
                )}
                {getCurrentInitiative(list) !== -1 && (<>
                    <p>Current turn: {getCurrentInitiative(list)}</p>
                        {list.map((entity, index) => (
                            <div key={index}>
                                <CombatEntity
                                    entity={entity}
                                    isCurrentTurn={getCurrentInitiative(list) === index}
                                    onClick={() => setList(endTurn(list))}
                                    onRemove={() => setList(removeInitiative(list, index))}
                                />
                            </div>
                        ))}
                </>
                )}
            </div>
        </div>
    );
}