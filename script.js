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
function loadDocument(docld) {
    textContainer.innerHTML = "";
    const paragraphs = documents[docld];
    if (!paragraphs) return;
    paragraphs.forEach(paragraphText => {
        const p = document.createElement("div");
        p.classList.add("paragraph");
        p.setAttribute("tabindex", "0");
        p.textContent = paragraphText;

        // Enter klikken op alinea
        p.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                currentParagraph = paragraphText;
                notePanel.classList.remove("hidden");
                noteInput.focus();
            }
        })

        textContainer.appendChild(p);
    })
}