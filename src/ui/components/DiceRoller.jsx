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
        const rolls = Array.from({length: Number(count)}, () =>
            Math.floor(Math.random() * Number(sides)) + 1
        );
        const bonus = Number(modifier);
        setResult({
            rolls,
            modifier: bonus,
            notation: `${count}d${sides}${bonus === 0 ? "" : bonus > 0 ? ` + ${bonus}` : ` − ${Math.abs(bonus)}`}`,
            total: rolls.reduce((sum, roll) => sum + roll, 0) + bonus,
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
                <button type="submit">Roll Dice</button>
            </form>
            <div className="dice-result" role="status" aria-live="polite" aria-atomic="true">
                {result ? <>
                    <p>{result.notation}: <strong className="dice-total">{result.total}</strong></p>
                    <p className="dice-breakdown">Rolls: {result.rolls.join(" + ")}
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
