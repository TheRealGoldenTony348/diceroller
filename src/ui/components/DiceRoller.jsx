import {useId, useRef, useState} from "react";

export default function DiceRoller() {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const toggleRef = useRef(null);
    const [count, setCount] = useState("1");
    const [sides, setSides] = useState("20");
    const [modifier, setModifier] = useState("0");
    const [result, setResult] = useState(null);

    function rollDice(event) {
        event.preventDefault();
        const mode = event.nativeEvent.submitter?.value || "normal";
        const isSpecialRoll = mode !== "normal";
        if (isSpecialRoll && (Number(count) !== 1 || Number(sides) !== 20)) return;
        const rolls = Array.from({length: isSpecialRoll ? 2 : Number(count)}, () =>
            Math.floor(Math.random() * Number(sides)) + 1
        );
        const kept = isSpecialRoll
            ? (mode === "advantage" ? Math.max(...rolls) : Math.min(...rolls))
            : null;
        const bonus = Number(modifier);
        setResult({
            rolls,
            mode,
            kept,
            modifier: bonus,
            notation: `${count}d${sides}${bonus === 0 ? "" : bonus > 0 ? ` + ${bonus}` : ` − ${Math.abs(bonus)}`}`,
            total: (kept ?? rolls.reduce((sum, roll) => sum + roll, 0)) + bonus,
        });
    }

    return (
        <div className="dice-widget" onKeyDown={event => {
            if (event.key === "Escape" && isOpen) {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        }}>
        <section id={`${id}-panel`} className="dice-roller" hidden={!isOpen}
                 aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>Dice Roller</h2>
            <form className="dice-controls" onSubmit={rollDice}>
                <label htmlFor={`${id}-count`}>
                    Dice
                    <input id={`${id}-count`} type="number" min="1" max="100" step="1" required
                           value={count} onChange={event => setCount(event.target.value)}/>
                </label>
                <label htmlFor={`${id}-sides`}>
                    Die type
                    <select id={`${id}-sides`} value={sides} onChange={event => setSides(event.target.value)}>
                        {[4, 6, 8, 10, 12, 20, 100].map(value => (
                            <option key={value} value={value}>d{value}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor={`${id}-modifier`}>
                    Modifier
                    <input id={`${id}-modifier`} type="number" min="-1000" max="1000" step="1" required
                           value={modifier} onChange={event => setModifier(event.target.value)}/>
                </label>
                <div className="dice-roll-actions">
                    <button type="submit" value="normal">Roll Dice</button>
                    <button type="submit" value="advantage"
                            disabled={Number(count) !== 1 || Number(sides) !== 20}
                            aria-describedby={`${id}-advantage-help`}>Advantage</button>
                    <button type="submit" value="disadvantage"
                            disabled={Number(count) !== 1 || Number(sides) !== 20}
                            aria-describedby={`${id}-advantage-help`}>Disadvantage</button>
                </div>
                <p id={`${id}-advantage-help`} className="dice-breakdown">
                    For 1d20: roll twice and keep the higher (advantage) or lower (disadvantage) roll.
                </p>
            </form>
            <div className="dice-result" role="status" aria-live="polite" aria-atomic="true">
                {result ? <>
                    <p>{result.notation}: <strong className="dice-total">{result.total}</strong></p>
                    {result.mode !== "normal" && <p className="dice-breakdown">
                        {result.mode === "advantage" ? "Advantage" : "Disadvantage"}: kept {result.kept}
                    </p>}
                    <p className="dice-breakdown">Rolls: {result.rolls.join(result.mode === "normal" ? " + " : ", ")}
                        {result.modifier !== 0 && `; modifier: ${result.modifier > 0 ? "+" : ""}${result.modifier}`}
                    </p>
                </> : <p>Choose your dice and roll to see the result.</p>}
            </div>
        </section>
        <button ref={toggleRef} type="button" className="dice-toggle"
                aria-expanded={isOpen} aria-controls={`${id}-panel`}
                onClick={() => setIsOpen(open => !open)}>
            <span aria-hidden="true">{isOpen ? "×" : "⚄"}</span>
            {isOpen ? "Close" : "Dice Roller"}
        </button>
        </div>
    );
}
