import {removeInitiative} from "../../logic/initiative.js";

export default function CombatEntity({ entity, isCurrentTurn, onClick, onRemove }) {
  return (
    <div
      className={`combat-entity ${isCurrentTurn ? "current-turn" : ""}`}
    >
      <div className="entity-name">{entity.name}</div>
      <div className="entity-initiative">{entity.initiative}</div>
      {isCurrentTurn && (
        <button onClick={onClick}>End Turn</button>
      )}
      <button onClick={onRemove} >Remove</button>
    </div>
  );
}