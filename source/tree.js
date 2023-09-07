'use strict'

function tree(height) {
    if (height < 3) {
        return null
    }

    let treeString = "";

    for (let i = 0; i < height - 1; i++) {
        treeString += " ".repeat(height - i - 2);
        treeString += "*".repeat(2 * i + 1);
        treeString += " ".repeat(height - i - 2);
        treeString += "\n";
    }

    treeString += " ".repeat(height - 2);
    treeString += "|";
    treeString += " ".repeat(height - 2);
    treeString += "\n";

    return treeString;
}
