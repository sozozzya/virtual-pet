const app = require("./app");
const { startPetTimer } = require("./utils/timer");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    startPetTimer();
});
