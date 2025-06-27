const petModel = require("../models/petModel");

exports.getPet = (req, res) => {
    const pet = petModel.getPet();
    if (!pet)
        return res.status(404).json({ error: "Pet was not found" });
    res.json(pet);
};

exports.createPet = (req, res) => {
    const name = req.body.name;
    if (!name)
        return res.status(400).json({ error: "Name is required" });
    const pet = petModel.createPet(name);
    res.status(201).json(pet);
};

exports.feedPet = (req, res) => {
    try {
        petModel.feedPet();
        res.json(petModel.getPet());
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.healPet = (req, res) => {
    try {
        petModel.healPet();
        res.json(petModel.getPet());
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.playWithPet = (req, res) => {
    try {
        petModel.playWithPet();
        res.json(petModel.getPet());
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};
