/*BRON: Uitleg aan chatgpt gevraagd */
const docs = {
                boek1: ["Paragraaf 1", "Paragraaf 2"],
                boek2: ["Paragraaf 1", "Paragraaf 2"]
};

let currentDoc="null";
let currentParagraph = null;
const notes = {}; //opslag per document

//Document laden
function loadDoc(name) {
    const container = document.getElementById("docContent");
    container.innerHTML = "<h1>TEKST<h1>";

    docs[name].forEach((p) => {
        const para = document.createElement("p");
        para.textContent = p;
        para.setAttribute("tabindex", "0");

        const btn = document.createElement("button");
        btn.textContent = "Maak annotatie";
        btn.addEventListener("click", () => showNoteField(p));

        main.appendChild(para);
        main.appendChild(btn);
    });
}

    //Notitieveld openen (later)
    function showNoteField(text) {
        currentText = text;
    }

    //Notitie opslaan
    function saveNote() {
        const note = document.getElementById("note").value;
        const list = document.getElementById("noteList");

        const li = document.createElement("li");
        li.textContent = currentText + " -> " + note;

        list.appendChild(li);

        document.getElementById("note").value = "";
    }

//knoppen koppelen
document.getElementById("boek1Btn").addEventListener("click", () => {
    loadDoc("boek1");
});

document.getElementById("boek2Btn").addEventListener("click", () => {
    loadDoc("boek2");
});