/*BRON: Uitleg aan chatgpt gevraagd */
const documents = {
                Plato: [
                    "Alinea 1.",
                    "Alinea 2.",
                    "Alinea 3."
                ],

                Epistemologie: [
                    "Alinea 1.",
                    "Alinea 2.",
                    "Alinea 3."
                ]
};

// De elementen
const textContainer = document.getElementById("text-container");

const notePanel = document.getElementById("note-panel");

const noteInput = document.getElementById("note-input");

const saveButton = document.getElementById("save-note");

const savedNotes = document.getElementById("saved-notes");

// De alinea
let currentParagraph = "";

// Het document laden
const docButtons = document.querySelectorAll(".button");

docButtons.forEach(button => {
    button.addEventListener("click", () => {
        const docld = button.dataset.doc;
        loadDocument(docld);
    })
})

// De tekst zien/lezen





    container.innerHTML = "";


    docs[name].forEach((p) => {
        const para = document.createElement("p");
        para.textContent = p;
        para.tabindex = 0;

        para.addEventListener("click", () => selectParagraph(p));
        speak(p);

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

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "nl-NL";
    speechSynthesis.speak(utterance);
}


//Knoppen
document.getElementById("PlatoBtn").addEventListener("click", () => loadDoc("Plato"));
document.getElementById("EpistemologieBtn").addEventListener("click", () => loadDoc("Epistemologie"));