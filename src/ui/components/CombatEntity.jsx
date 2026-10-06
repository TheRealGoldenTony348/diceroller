
export default function CombatEntity({entity, isCurrentTurn, onClick, onRemove,onReroll}) {
    return (
        <>
            <div
                className={`combat-entity ${isCurrentTurn ? "current-turn" : ""}`}
            >
                <div className="entity-name">{entity.name}</div>
                <div className="entity-initiative">{entity.initiative}</div>
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