/*BRON: Uitleg aan chatgpt gevraagd */
const documents = {
                Plato: [
                    "Plato wordt geboren in een aristocratische familie tijdens de Gouden Eeuw van Athene. Hij is voorbestemd tot een politieke carrière, maar besluit onder invloed van Socrates zijn leven te wijden aan de filosofie.",
                    "Socrates is een wijsgeer die veel rondhangt op het marktplein van Athene, continu vragen afvurend op voorbijgangers. Met die ‘socratische methode’ trekt hij veel volgelingen aan. Maar naast volgers maakt Socrates ook vijanden. Socrates wordt tot de dood veroordeeld door het bestuur van de stad Athene en hij maakt een einde aan zijn leven door een gifbeker leeg te drinken.",
                    "Daarna wordt Socrates een belangrijk personage in de teksten van Plato. Die bestaan vooral uit dialogen, waarin het personage Socrates door omstanders te ondervragen hun kennis ter discussie stelt en de echte ‘waarheid’ probeert te benaderen. Door de opzet van die dialogen is het vaak onduidelijk welke uitspraken en theorieën echt van Socrates komen, en welke van Plato.",
                    "Een paar van de dialogen waarin Socrates opduikt zijn de Phaedrus en de Phaedo, waarin Plato voor het eerst zijn ideeënleer beschrijft: in een metafysische, alleen voor het denken toegankelijke wereld, bestaan oervormen van de concrete, in de alledaagse werkelijkheid waar te nemen dingen. Dat verklaart waarom dingen herkenbaar zijn en blijven, maar tegelijkertijd toch voortdurend veranderen. Zo blijft een paard te herkennen als paard, ook als het slechts drie poten heeft, zwart of wit is, of gaandeweg ouder wordt – de essentie van het paard blijft bestaan.",
                    "Bovenaan de ideeënleer staan ‘het goede, ware en schone.’ Zij wakkeren het verlangen om goed te doen, de drang naar juiste kennis en de zoektocht naar schoonheid aan. De zetel van deze drang naar het hogere is de ziel, het onsterfelijke deel van de mens. Het lichaam is volgens Plato een kerker, waaruit de ziel bij de dood ontsnapt. Tijdens ons leven kunnen we al een voorschot nemen op onsterfelijkheid door de eeuwige ideeën te leren kennen door middel van filosofie.",
                    "In de allegorie van de grot van Plato illustreert hij de ideeënleer door ons te vergelijken met gevangenen in een grot. De gevangenen zien schaduwen op de muur van de grot, die zij beschouwen als de echte werkelijkheid. De filosoof is de gevangene die voor het eerst voet zet buiten de grot en de echte wereld waarneemt. Vervolgens keert deze terug naar de grot en probeert zijn medegevangenen te overtuigen van het feit dat zij zich bedienen van schijnkennis. Dat wordt hem door zijn grotgenoten echter niet in dank afgenomen, vertelt Plato.",
                    "Plato’s opvattingen over staatkunde vloeien ook voort uit deze ideeënleer. In de Politeia beschrijft hij de ideale staat: een maatschappij die geleid wordt door vorsten die kennis hebben van de ideeën zodat zij als rechtvaardige ‘filosoof-koningen’ regeren. Als Plato al op hoge leeftijd is nodigt Dionysius, de heerser van de Siciliaanse stadstaat Syracuse, hem uit om daar de ideale staat op te zetten. Dat mislukt, en Plato keert gedesillusioneerd terug naar Athene. Daar sterft hij ook.",
                    "Plato en Aristoteles worden samen vaak tot de grootste filosofen van de Griekse oudheid gerekend. Zoals Plato opgeleid is door Socrates, is Aristoteles ook weer een leerling van Plato. Aristoteles brengt zijn opleiding namelijk door aan de Academie, de filosofische school van Plato. Aristoteles zet zich in zijn werken af tegen zijn leermeester: de abstracte metafysica van Plato laat hij los, en hij richt zich veel meer op de tastbare werkelijkheid."
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