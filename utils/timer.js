const { updateStatus } = require("../models/petModel");

function startPetTimer() {
    setInterval(updateStatus, 60 * 1000);
}

module.exports = { startPetTimer };
