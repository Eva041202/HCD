/*BRON: https://www.youtube.com/watch?v=FOC5RZHK_Gw + uitleg chatgpt*/
// Cursor
console.log("SCRIPT START");
const cursor = document.getElementById("cursor");
console.log(cursor);
document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
})

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
                    "‘Wat is waarheid?’ is de kernvraag van de epistemologie. Het Griekse ἐπιστήμη (epistèmè) betekent ‘weten’ of ‘kennis’. Epistemologie is dan de leer van het weten of de kennis en richt zich op de vraag naar waarheid of zekerheid. Wat is ware kennis? Wat is de grond van de waarheid? Waarvan kunnen we zeker zijn en hoe kunnen we zeker zijn van iets?",
                    "Omdat de epistemologie bestudeert wat goede of ware kennis is, richten veel epistemologen hun onderzoek op het bedrijf dat sinds de moderne tijd ware kennis produceert: de wetenschap. Epistemologen zijn dus niet zelden ook wetenschapsfilosofen.",
                    "Verder heeft de epistemologie ook veel raakpunten met de logica – de leer van het geldige argument. Hoewel epistemologie, wetenschapsfilosofie en logica erg belangrijk zijn in de analytische traditie van de filosofie, hebben ook voorname continentale filosofen in de twintigste eeuw zich met epistemologische en wetenschapsfilosofische vraagstukken bezig gehouden.",
                    "Stel dat Ingrid en Moustapha solliciteren voor dezelfde baan. Ingrid gaat als eerste het gesprek aan, maar heeft veel moeilijkheden met de vragen. Het angstzweet breekt haar uit en ze zegt dingen waarvan ze later denkt dat het onzin is. Ze is er dus haast zeker van dat ze de baan niet heeft. Wanneer Moustapha na haar de sollicitatiekamer binnengaat, ziet Ingrid nog net dat er een briefje van tien euro in de binnenzak van zijn mooie maatpak zit. Ze concludeert dus: ‘De persoon die de baan krijgt, heeft een briefje van tien euro op zak.’ Ze heeft immers goede redenen om dit te geloven en ze gelooft het ook echt. Echter, volkomen onverwacht neemt het kantoor toch Ingrid aan. Bovendien ontdekt ze, wat ze eerst niet wist, dat ook zij een briefje van tien euro in haar binnenzak had. Haar stelling ‘de persoon die de baan krijgt, heeft een briefje van tien euro op zak’ bleek dus wel waar. Toch zouden veel mensen niet zeggen dat ze ware kennis had.",
                    "In het voorbeeld voldoet Ingrid aan de drie klassieke voorwaarden van ware kennis: 1. Ingrid heeft goede redenen om haar stelling te geloven (Justified). 2. Wat Ingrid gelooft is het geval (True). 3.Ingrid gelooft haar stelling echt (Belief).",
                    "‘Ware kennis’ werd vaak gezien als justified true belief, in de literatuur vaak afgekort als JTB. Het gedachte-experiment, bekend als het Gettier-probleem, toont echter dat de drie voorwaarden voor ware kennis vervuld kunnen zijn, zonder dat er sprake is van ware kennis. Een van de uitdagingen voor epistemologen is dan ook om een nieuwe definitie van ware kennis te vinden.",
                    "Zij houden zich ook vaak bezig met de verhouding tussen kennis en de werkelijkheid. (Eigenlijk dus de tweede voorwaarde van justified true belief.) Waarheidstheorieën die de nadruk leggen op de overeenstemming tussen kennis en de werkelijkheid noemen we correspondentietheorieën. Voorbeelden hiervan zijn te vinden bij de Oostenrijks-Britse filosoof Ludwig Wittgenstein of in de middeleeuwse scholastiek. Een beroemde middeleeuwse definitie van waarheid luidt: ‘Waarheid is de overeenstemming van het ding met het verstand’.",
                    "Het is echter altijd mogelijk om eraan te twijfelen of deze correspondentie wel echt het geval is. Hoe kunnen we immers zeker weten dat niets ons bedriegt? De Franse filosoof René Descartes heeft dit probleem van het mogelijke bedrog doorgedacht. Eigenlijk kunnen we er niet zomaar van uit gaan dat er geen kwade geest (malin génie) is die ons doet geloven dat er een overeenstemming dus denken en wereld is, terwijl hij ons eigenlijk misleidt. Een hedendaagse representatie hiervan vinden we in de film The Matrix. (Spoiler alert: daar zijn mensen allemaal opgesloten in gesloten capsules, maar worden hun hersenen gestimuleerd zodat ze denken te leven in een virtuele wereld.",
                    "Het enige waar we volgens Descartes niet aan kunnen twijfelen is dat we twijfelen. Zelf als ik aan alles in de wereld twijfel, dan twijfel ik nog steeds. Eigenlijk hebben we dus meteen twee zekerheden: de twijfel of het denken, en het ik – door Descartes gevat in het cogito. Zekerder dan het ik twijfel is niets. Dit stelt Descartes meteen in staat om een strenge maatstaf voor zekerheid voor te houden. Het criterium voor zekerheid is nu namelijk dat we zeker moeten zijn van iets zoals we zeker zijn dat we twijfelen. Als we de waarheid van iets willen aantonen, moeten we dat kunnen afleiden uit het eigen denken, het cogito.",
                    "Het scepticisme, de opvatting dat je aan alles kunt twijfelen, is een belangrijke denkstroming binnen de filosofie. Ze formuleert steeds uitdagingen voor waarheidsopvattingen. Het gevaar dat echter op de loer ligt is dat het scepticisme niet in overeenstemming is met het leven. We doen immers allerlei zaken, waarvan we niet noodzakelijk helemaal zeker zijn, maar die toch werken. Zoals de Schotse filosoof David Hume zegt kunnen we niet zeker zijn van het oorzakelijke verband tussen de ene biljartbal die de ander voortduwt – we zien de oorzakelijkheid immers niet – maar uit gewoonte leiden we dit wel af. En zolang het werkt en leefbaar is, moeten we onze filosofische twijfel om praktische redenen in het dagelijkse leven aan de kant schuiven.",
                    "Hume behoort tot de filosofen die ware kennis willen afleiden uit de ervaring. Hen noemen we empiristen. Hoe we zeker kunnen zijn van onze ervaring is voor hen een centraal probleem. Filosofen die de waarheid niet proberen af te leiden uit hun ervaringen, maar uit het denken zelf, noemen we rationalisten. Niet de waarneming, maar de ratio is de maatstaf voor waarheid en zekerheid.",
                    "Waarheidstheorieën van rationalisten leggen vaak minder nadruk op de overeenstemming tussen waarheid en werkelijkheid. Vaak is het hier belangrijker dat waarheidstheorieën intern blijken te kloppen, niet in tegenspraak zijn met zichzelf. Niet correspondentie, maar interne coherentie is hier de leidraad voor waarheid. We spreken dan ook van coherentietheorieën. Spinoza, Leibniz, Hegel, maar in zekere zin ook Descartes zijn hier voorbeelden van. Zij moeten bewijzen hoe het kan dat we toch allemaal in dezelfde wereld lijken te leven, als we niet de ervaring mogen vertrouwen."
                ]
};

// De elementen
const textContainer = document.getElementById("text-container");

const notePanel = document.getElementById("note-panel");

const noteInput = document.getElementById("note-input");

const saveButton = document.getElementById("save-note");

const savedNotes = document.getElementById("saved-notes");
//Enter klikken op pagina
const notesPanel = document.querySelector(".notes-panel");

// opslaan knop "opgeslagen"
const savedMessage = document.getElementById("saved-message");

// De alinea
let currentParagraph = "";

//HTML element
let currentElement = null;

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
        const p = document.createElement("button");
        p.classList.add("paragraph");

        p.textContent = paragraphText;

        p.addEventListener("click", () => {
            console.log("ACTIVATED");

            currentParagraph = paragraphText;
            currentElement = p;
            notesPanel.open = true; //N gaat dan open om te kunnen typen
            noteInput.value = "";
            noteInput.focus();
            });

        console.log("Alinea toegevoegd", paragraphText);

        textContainer.appendChild(p);
    });

    //focus naar 1e alinea van de tekst
    const firstParagraph = textContainer.querySelector(".paragraph");

    if (firstParagraph) {
        firstParagraph.focus();
    }
}

//Opslaan button
saveButton.addEventListener("click", saveNote);

function saveNote() {
    const noteText = noteInput.value;

    if (noteText === "") return;

    const note = document.createElement("div");
    note.tabIndex = 0;

    // samenvatting notitie
    const korteAlinea = currentParagraph.split(" ")
                                        .slice(0, 4)
                                        .join(" ")
                                        + "...";

    const titel = document.createElement("p");
    titel.textContent = "Alinea: " + currentParagraph;

    const mijnNotitie = document.createElement("p");
    mijnNotitie.textContent = "Mijn notitie: " + noteText;

    note.appendChild(titel);
    note.appendChild(mijnNotitie);

    note.setAttribute(
        "aria-label", "Alinea: " + korteAlinea + ". Mijn notitie: " + noteText
    );

    // note.innerHTML = "<strong>Alinea:</strong><br>" + currentParagraph + "<br><br>" + "<strong>Mijn notitie:</strong><br>" + noteText;

    savedNotes.appendChild(note);
    noteInput.value = "";

    //screenreader "opgeslagen"
    savedMessage.textContent = "";
    setTimeout(() => {
        savedMessage.textContent = "opgeslagen";
    }, 100);

    //wachten tot focus naar tekst gaat
    setTimeout(() => {
        if (currentElement) {
            const nextParagraph = currentElement.nextElementSibling;
            if (nextParagraph) {
                nextParagraph.focus();
            } else {
                currentElement.focus();
            }
        }
    }, 1000);


document.addEventListener("keydown", (event) => {
    console.log("TOETS:", event.key);
});
}