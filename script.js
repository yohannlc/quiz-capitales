const questions = [
    { country: "Afghanistan", capital: "Kaboul" },
    { country: "Albanie", capital: "Tirana" },
    { country: "Algérie", capital: "Alger" },
    { country: "Andorre", capital: "Andorre la Vieille" },
    { country: "Angola", capital: "Luanda" },
    { country: "Antigua-et-Barbuda", capital: "Saint John's" },
    { country: "Argentine", capital: "Buenos Aires" },
    { country: "Arménie", capital: "Erevan" },
    { country: "Australie", capital: "Canberra" },
    { country: "Autriche", capital: "Vienne" },
    { country: "Azerbaïdjan", capital: "Bakou" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dacca" },
    { country: "Barbade", capital: "Bridgetown" },
    { country: "Biélorussie", capital: "Minsk" },
    { country: "Belgique", capital: "Bruxelles" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Bénin", capital: "Porto Novo" },
    { country: "Bhoutan", capital: "Thimphou" },
    { country: "Bolivie", capital: "Sucre" },
    { country: "Bosnie-Herzégovine", capital: "Sarajevo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Brésil", capital: "Brasilia" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgarie", capital: "Sofia" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Gitega" },
    { country: "Cabo Verde", capital: "Praia" },
    { country: "Cambodge", capital: "Phnom Penh" },
    { country: "Cameroun", capital: "Yaoundé" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Centrafrique", capital: "Bangui" },
    { country: "Chili", capital: "Santiago" },
    { country: "Chine", capital: "Pékin" },
    { country: "Colombie", capital: "Bogota" },
    { country: "Comores", capital: "Moroni" },
    { country: "République du Congo", capital: "Brazzaville" },
    { country: "République démocratique du Congo", capital: "Kinshasa" },
    { country: "Costa Rica", capital: "San José" },
    { country: "Croatie", capital: "Zagreb" },
    { country: "Cuba", capital: "La Havane" },
    { country: "Danemark", capital: "Copenhague" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Dominique", capital: "Roseau" },
    { country: "Égypte", capital: "Le Caire" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Équateur", capital: "Quito" },
    { country: "Érythrée", capital: "Asmara" },
    { country: "Espagne", capital: "Madrid" },
    { country: "Estonie", capital: "Tallinn" },
    { country: "États-Unis", capital: "Washington" },
    { country: "Fidji", capital: "Suva" },
    { country: "Finlande", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambie", capital: "Banjul" },
    { country: "Géorgie", capital: "Tbilissi" },
    { country: "Ghana", capital: "Accra" },
    { country: "Grèce", capital: "Athènes" },
    { country: "Grenade", capital: "Saint Georges" },
    { country: "Guatemala", capital: "Guatemala" },
    { country: "Guinée", capital: "Conakry" },
    { country: "Guinée-Bissau", capital: "Bissau" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haïti", capital: "Port au Prince" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hongrie", capital: "Budapest" },
    { country: "Inde", capital: "New Delhi" },
    { country: "Indonésie", capital: "Jakarta" },
    { country: "Irak", capital: "Bagdad" },
    { country: "Iran", capital: "Téhéran" },
    { country: "Irlande", capital: "Dublin" },
    { country: "Islande", capital: "Reykjavik" },
    { country: "Italie", capital: "Rome" },
    { country: "Jamaïque", capital: "Kingston" },
    { country: "Japon", capital: "Tokyo" },
    { country: "Jordanie", capital: "Amman" },
    { country: "Kazakhstan", capital: "Astana" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Kirghizistan", capital: "Bichkek" },
    { country: "Kiribati", capital: "Tarawa" },
    { country: "Koweït", capital: "Koweït" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Lettonie", capital: "Riga" },
    { country: "Liban", capital: "Beyrouth" },
    { country: "Libéria", capital: "Monrovia" },
    { country: "Libye", capital: "Tripoli" },
    { country: "Lituanie", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malaisie", capital: "Kuala Lumpur" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Maldives", capital: "Malé" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malte", capital: "La Valette" },
    { country: "Maroc", capital: "Rabat" },
    { country: "Maurice", capital: "Port Louis" },
    { country: "Mauritanie", capital: "Nouakchott" },
    { country: "Mexique", capital: "Mexico" },
    { country: "Micronésie", capital: "Palikir" },
    { country: "Moldavie", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolie", capital: "Oulan Bator" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Namibie", capital: "Windhoek" },
    { country: "Nauru", capital: "Yaren" },
    { country: "Népal", capital: "Katmandou" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "Norvège", capital: "Oslo" },
    { country: "Nouvelle-Zélande", capital: "Wellington" },
    { country: "Oman", capital: "Mascate" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palaos", capital: "Ngerulmud" },
    { country: "Panama", capital: "Panama" },
    { country: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby" },
    { country: "Paraguay", capital: "Asuncion" },
    { country: "Pays-Bas", capital: "Amsterdam" },
    { country: "Philippines", capital: "Manille" },
    { country: "Pologne", capital: "Varsovie" },
    { country: "Portugal", capital: "Lisbonne" },
    { country: "Qatar", capital: "Doha" },
    { country: "République tchèque", capital: "Prague" },
    { country: "République dominicaine", capital: "Saint Domingue" },
    { country: "Roumanie", capital: "Bucarest" },
    { country: "Royaume-Uni", capital: "Londres" },
    { country: "Russie", capital: "Moscou" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "Saint-Christophe-et-Niévès", capital: "Basseterre" },
    { country: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown" },
    { country: "Sao Tomé-et-Principe", capital: "Sao Tomé" },
    { country: "Sénégal", capital: "Dakar" },
    { country: "Serbie", capital: "Belgrade" },
    { country: "Seychelles", capital: "Victoria" },
    { country: "Sierra Leone", capital: "Freetown" },
    { country: "Singapour", capital: "Singapour" },
    { country: "Slovénie", capital: "Ljubljana" },
    { country: "Slovaquie", capital: "Bratislava" },
    { country: "Somalie", capital: "Mogadiscio" },
    { country: "Soudan", capital: "Khartoum" },
    { country: "Soudan du Sud", capital: "Djouba" },
    { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
    { country: "Suède", capital: "Stockholm" },
    { country: "Suisse", capital: "Berne" },
    { country: "Syrie", capital: "Damas" },
    { country: "Tadjikistan", capital: "Douchanbé" },
    { country: "Tanzanie", capital: "Dodoma" },
    { country: "Tchad", capital: "N'Djamena" },
    { country: "Thaïlande", capital: "Bangkok" },
    { country: "Togo", capital: "Lomé" },
    { country: "Tonga", capital: "Nuku'alofa" },
    { country: "Trinité-et-Tobago", capital: "Port d'Espagne" },
    { country: "Tunisie", capital: "Tunis" },
    { country: "Turkménistan", capital: "Achgabat" },
    { country: "Turquie", capital: "Ankara" },
    { country: "Ukraine", capital: "Kiev" },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Vanuatu", capital: "Port Vila" },
    { country: "Vatican", capital: "Vatican" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Viêt Nam", capital: "Hanoi" },
    { country: "Yémen", capital: "Sanaa" },
    { country: "Zambie", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" }
];


// Fonction pour mélanger le tableau des questions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let currentQuestionIndex = 0;
let timer; // Variable pour le chronomètre
let timeElapsed = 0; // Temps écoulé en secondes

// Mélanger les questions
shuffle(questions);

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const { country } = questions[currentQuestionIndex];
    questionElement.textContent = `Capitale de ${country} ?`;
    document.getElementById('answer').value = '';

    // Ne pas réinitialiser le temps écoulé ici
    document.getElementById('time').textContent = formatTime(timeElapsed); // Afficher au format min:ss
}

function startTimer() {
    clearInterval(timer); // Effacer tout intervalle existant
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById('time').textContent = formatTime(timeElapsed); // Mettre à jour l'affichage du timer
    }, 1000); // Met à jour chaque seconde
}

// Fonction pour formater le temps en min:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    // Formater pour avoir toujours deux chiffres
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Écouteur d'événements pour la réponse
document.getElementById('answer').addEventListener('input', () => {
    const answerInput = document.getElementById('answer');
    const { capital } = questions[currentQuestionIndex];

    // Vérifier si la réponse est correcte
    if (answerInput.value.trim().toLowerCase() === capital.toLowerCase()) {
        answerInput.classList.add('correct');
        
        // Passer à la question suivante immédiatement
        currentQuestionIndex++;

        // Charger la nouvelle question
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            clearInterval(timer); // Arrêter le chronomètre à la fin du quiz
            document.getElementById('question').textContent = "Quiz terminé !";
            document.getElementById('answer').disabled = true; // Désactiver le champ de réponse
        }

        // Ajouter la classe pour faire disparaître la bordure progressivement
        setTimeout(() => {
            answerInput.classList.add('fade-out'); // Ajoute la classe pour faire disparaître la bordure
        }, 1); // Retarder d'une seconde avant de commencer la disparition

        // Retirer la classe 'correct' après avoir commencé la transition
        setTimeout(() => {
            answerInput.classList.remove('correct');
            answerInput.classList.remove('fade-out'); // Retire la classe de disparition
            answerInput.style.borderColor = ''; // Réinitialiser la bordure à la valeur par défaut
        }, 400); // Retirer la classe 'correct' après 2 secondes pour la synchroniser avec la disparition
    }
});

// Charger la première question
loadQuestion();
startTimer(); // Démarrer le chronomètre au début du quiz