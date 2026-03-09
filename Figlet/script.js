let figlet;

try {
    figlet = require("figlet");
} catch {
    figlet = require("figlet");
}

figlet("NODE", (err, data) => {
    if (err) {
        console.error("Error generating ASCII art:", err);
        return;
    }

    console.log(data);
});