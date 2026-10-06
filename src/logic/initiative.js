export function handleInitiative(initiative) {
    const currentTurn = initiative.find((entry) => entry.currentTurn);
    const sortedInitiative = [...initiative].sort(
        (a, b) => b.initiative - a.initiative
    );

    return sortedInitiative.map((entry, index) => ({
        ...entry,
        currentTurn: currentTurn ? entry === currentTurn : index === 0,
    }));
}

export function setCombatInitiative(initiative) {
    return [...initiative]
        .sort((a, b) => b.initiative - a.initiative)
        .map((entry, index) => ({
            ...entry,
            currentTurn: index === 0,
        }));
}

export function addInitiative(initiative, entry) {
    return handleInitiative([
        ...initiative,
        {...entry, currentTurn: false},
    ]);
}

export function removeInitiative(initiative, index) {
    const orderedInitiative = handleInitiative(initiative);

    if (
        !Number.isInteger(index)
        || index < 0
        || index >= orderedInitiative.length
    ) {
        throw new RangeError('Initiative index is out of range');
    }

    const removedEntry = orderedInitiative[index];
    const remainingInitiative = orderedInitiative.filter(
        (_, entryIndex) => entryIndex !== index
    );

    if (removedEntry.currentTurn && remainingInitiative.length > 0) {
        const nextEntry =
            orderedInitiative[(index + 1) % orderedInitiative.length];
        const nextIndex = remainingInitiative.findIndex(
            (entry) => entry === nextEntry
        );
        remainingInitiative[nextIndex] = {
            ...remainingInitiative[nextIndex],
            currentTurn: true,
        };
    }

    return handleInitiative(remainingInitiative);
}

function moveTurn(initiative, direction) {
    const orderedInitiative = handleInitiative(initiative);

    if (orderedInitiative.length < 2) {
        return orderedInitiative;
    }

    if (!initiative.some((entry) => entry.currentTurn)) {
        return orderedInitiative;
    }

    const currentIndex = orderedInitiative.findIndex(
        (entry) => entry.currentTurn
    );
    const nextIndex =
        (currentIndex + direction + orderedInitiative.length)
        % orderedInitiative.length;

    return orderedInitiative.map((entry, index) => ({
        ...entry,
        currentTurn: index === nextIndex,
    }));
}

export function nextInitiative(initiative) {
    return moveTurn(initiative, 1);
}

export function previousInitiative(initiative) {
    return moveTurn(initiative, -1);
}

export function endTurn(initiative) {
    return nextInitiative(initiative);
}

export function getCurrentInitiative(initiative) {
    return initiative.find((entry) => entry.currentTurn)?.initiative;
}

export function reRollInitiative(initiative, newInitiativeValues) {
    if (newInitiativeValues.length !== initiative.length) {
        throw new RangeError('There must be one new initiative value per entry');
    }

    return handleInitiative(
        initiative.map((entry, index) => ({
            ...entry,
            initiative: newInitiativeValues[index],
        }))
    );
}

export function reRollEntityInitiative(initiative, index) {
    if (
        !Number.isInteger(index)
        || index < 0
        || index >= initiative.length
    ) {
        throw new RangeError('Initiative index is out of range');
    }

    const newInitiative = Math.floor(Math.random() * 20) + 1;
    const updatedInitiative = initiative.map((entry, entryIndex) => (
        entryIndex === index
            ? {...entry, initiative: newInitiative}
            : entry
    ));
    return handleInitiative(updatedInitiative);
}