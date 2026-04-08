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
    currentDoc= name;

    const container = document.getElementById("docContent");
    container.innerHTML = "";


    docs[name].forEach((p, index) => {
        const para = document.createElement("p");
        para.textContent = p;
        para.tabindex = 0;

        para.addEventListener("click", () => selectParagraph(p));

        container.appendChild(para);
    });
}

function selectParagraph(text) {
    currentParagraph = text;

    document.getElementById("noteContext").textContent = "Notitie voor: " + text;
}

document.getElementById("saveNoteBtn").addEventListener("click", () => {
    const input = document.getElementById("noteInput");
    const value = input.value;

    if (!notes[currentDoc])
        notes[currentDoc] = [];

    notes[currentDoc].push({
        paragraph: currentParagraph, note: value
    });

    renderNotes();
    input.value = "";
});

function renderNotes () {
    const list = document.getElementById("noteList");
    list.innerHTML = "";

    if (!notes[currentDoc]) return;

    notes[currentDoc].forEach(n => {
        const li = document.createElement("li");
        li.textContent = `$ {n.paragraph}: ${n.note}`;
        list.appendChild(li);
    });
}

//Knoppen
document.getElementById("boek1Btn").addEventListener("click", () => loadDoc("boek1"));
document.getElementById("boek2Btn").addEventListener("click", () => loadDoc("boek2"));