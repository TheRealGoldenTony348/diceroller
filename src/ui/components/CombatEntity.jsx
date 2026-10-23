
export default function CombatEntity({entity, isCurrentTurn, onClick, onRemove, onReroll, onModifierChange}) {
    return (
        <>
            <div
                className={`combat-entity ${isCurrentTurn ? "current-turn" : ""}`}
            >
                <div className="entity-name">{entity.name}</div>
                <div className="entity-initiative">{entity.initiative}</div>
                <label className="entity-modifier">
                    Initiative modifier
                    <input type="number" step="1" value={entity.initiativeModifier ?? 0}
                           onChange={event => {
                               const value = event.target.valueAsNumber;
                               if (Number.isSafeInteger(value)) onModifierChange(value);
                           }}/>
                </label>
                <div className="entity-actions">
                    <button onClick={onReroll}>Reroll</button>
                    <button onClick={onRemove}>Remove</button>
                    {entity.currentTurn && (
                        <button onClick={onClick}>End Turn</button>
                    )}
                </div>
            </div>
        </>
    );
}
