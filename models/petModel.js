let pet = null;

function getPet() {
    return pet;
}

function createPet(name) {
    pet = {
        name,
        age: 0,
        health: 100,
        hunger: 0,
        mood: 100,
        status: "alive"
    };
    return pet;
}

function feedPet() {
    if (!pet || pet.status === "dead")
        throw new Error("Pet is dead.");
    pet.hunger = Math.max(0, pet.hunger - 30);
    pet.mood = Math.min(100, pet.mood + 10);
}

function healPet() {
    if (!pet || pet.status === "dead")
        throw new Error("Pet is dead.");
    pet.health = Math.min(100, pet.health + 20);
    pet.hunger = Math.max(0, pet.hunger - 10);
}

function playWithPet() {
    if (!pet || pet.status === "dead")
        throw new Error("Pet is dead.");
    pet.mood = Math.min(100, pet.mood + 15);
    pet.hunger = Math.min(100, pet.hunger + 5);
}

function updateStatus() {
    if (!pet)
        return;
    pet.age += 1;

    if (pet.hunger > 70)
        pet.health = Math.max(0, pet.health - 5);
    else
        pet.health = Math.max(0, pet.health - 2);

    pet.hunger = Math.min(100, pet.hunger + 3);
    pet.mood = Math.min(100, (pet.health + (100 - pet.hunger)) / 2);

    if (pet.health <= 0 || pet.hunger >= 100)
        pet.status = "dead";
    else if (pet.health <= 30 && pet.health > 0)
        pet.status = "sick";
    else if (pet.health > 30)
        pet.status = "alive";
}

module.exports = {
    getPet,
    createPet,
    feedPet,
    healPet,
    playWithPet,
    updateStatus
};
