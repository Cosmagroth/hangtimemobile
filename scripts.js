// Particle.js configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Game logic
const words = [
    { word: 'ELEPHANT', hint: 'Largest land mammal with a trunk' },
    { word: 'PIZZA', hint: 'Popular Italian dish with toppings' },
    { word: 'GUITAR', hint: 'Stringed musical instrument' },
    { word: 'OXYGEN', hint: 'Essential element for breathing' },
    { word: 'JUNGLE', hint: 'Dense tropical forest' },
    { word: 'ISLAND', hint: 'Land surrounded by water' },
    { word: 'COFFEE', hint: 'Popular caffeinated beverage' },
    { word: 'RAINBOW', hint: 'Colorful arc in the sky after rain' },
    { word: 'BICYCLE', hint: 'Two-wheeled pedal-driven vehicle' },
    { word: 'ASTRONAUT', hint: 'Person trained to travel in spacecraft' },
    { word: 'CHOCOLATE', hint: 'Sweet treat made from cocoa' },
    { word: 'WATERFALL', hint: 'Cascade of water falling from a height' },
    { word: 'SUNFLOWER', hint: 'Tall plant with large yellow flowers' },
    { word: 'BUTTERFLY', hint: 'Insect with colorful wings' },
    { word: 'UMBRELLA', hint: 'Device used for protection against rain' },
    { word: 'VOLCANO', hint: 'Mountain that can erupt with lava' },
    { word: 'TELESCOPE', hint: 'Instrument for viewing distant objects' },
    { word: 'PAINTING', hint: 'Art created with colors on a surface' },
    { word: 'KEYBOARD', hint: 'Input device with keys for typing' },
    { word: 'JAVASCRIPT', hint: 'Popular programming language for web development' },
    { word: 'HTML', hint: 'Markup language for creating web pages' },
    { word: 'CSS', hint: 'Styling language for web pages' },
    { word: 'REACT', hint: 'A JavaScript library for building user interfaces' },
    { word: 'PYTHON', hint: 'A versatile programming language known for its simplicity' },
    { word: 'PROGRAMMING', hint: 'The process of creating instructions for a computer' },
    { word: 'DINOSAUR', hint: 'Extinct giant reptiles from the Mesozoic era' },
    { word: 'COMPUTER', hint: 'Electronic device for storing and processing data' },
    { word: 'PYRAMID', hint: 'Ancient monumental structure in Egypt' },
    { word: 'OCEAN', hint: 'Large body of saltwater covering most of the Earth' },
    { word: 'MICROSCOPE', hint: 'Instrument used to see small objects' },
    { word: 'LIBRARY', hint: 'A place where books and resources are available' },
    { word: 'CROCODILE', hint: 'Large aquatic reptile with a long snout' },
    { word: 'MOUNTAIN', hint: 'Large natural elevation of the earth\'s surface' },
    { word: 'SANDWICH', hint: 'Food item consisting of bread with fillings' },
    { word: 'SATELLITE', hint: 'Object placed into orbit around Earth or another planet' },
    { word: 'PHOTOGRAPH', hint: 'An image captured by a camera' },
    { word: 'HONEYBEE', hint: 'Insect known for producing honey' },
    { word: 'TRAMPOLINE', hint: 'A device for jumping, consisting of a strong fabric' },
    { word: 'ROCKET', hint: 'Vehicle designed to travel through space' },
    { word: 'MUSHROOM', hint: 'A type of fungi often used in cooking' },
    { word: 'HEADPHONES', hint: 'Device worn on ears to listen to audio' },
    { word: 'LIGHTHOUSE', hint: 'A tower with a bright light to guide ships' },
    { word: 'TORNADO', hint: 'A violently rotating column of air' },
    { word: 'ASTEROID', hint: 'Small rocky body orbiting the sun' },
    { word: 'CHEESECAKE', hint: 'A rich dessert made with cream cheese' },
    { word: 'CATERPILLAR', hint: 'Larval stage of butterflies and moths' },
    { word: 'CHAMELEON', hint: 'Lizard known for changing color' },
    { word: 'SPACESHIP', hint: 'Vehicle used for traveling in outer space' },
    { word: 'WILDLIFE', hint: 'Animals living in their natural habitat' },
    { word: 'SNOWFLAKE', hint: 'Ice crystal that falls from the sky' },
    { word: 'WINDMILL', hint: 'Structure that converts wind energy into rotational energy' },
    { word: 'HARVEST', hint: 'The process of gathering ripe crops' },
    { word: 'ROBOT', hint: 'A machine capable of carrying out complex tasks' },
    { word: 'MARATHON', hint: 'A long-distance running race' },
    { word: 'BALLOON', hint: 'Inflatable rubber object used for decoration or play' },
    { word: 'ALLIGATOR', hint: 'Large reptile similar to a crocodile' },
    { word: 'DOLPHIN', hint: 'Intelligent marine mammal known for its playful nature' },
    { word: 'IGLOO', hint: 'Dome-shaped snow house used by Eskimos' },
    { word: 'QUICKSAND', hint: 'Loose sand that can engulf objects' },
    { word: 'ORCHID', hint: 'A diverse and widespread family of flowering plants' },
    { word: 'PINEAPPLE', hint: 'A tropical fruit with spiky skin' },
    { word: 'VOLLEYBALL', hint: 'Sport played by two teams separated by a net' },
    { word: 'ALMOND', hint: 'Type of nut known for its healthy properties' },
    { word: 'KANGAROO', hint: 'Marsupial native to Australia' },
    { word: 'COMET', hint: 'Celestial object composed of ice and dust' },
    { word: 'MICROPHONE', hint: 'Device used to amplify voices' },
    { word: 'SUNGLASSES', hint: 'Eyewear designed to protect eyes from sunlight' },
    { word: 'CHESSBOARD', hint: 'Board on which the game of chess is played' },
    { word: 'DICTIONARY', hint: 'Book containing the meanings of words' },
    { word: 'PENGUIN', hint: 'Flightless bird known for its tuxedo-like appearance' },
    { word: 'PYTHON', hint: 'Large non-venomous snake found in Africa and Asia' },
    { word: 'HARPSICHORD', hint: 'Keyboard instrument that preceded the piano' },
    { word: 'STETHOSCOPE', hint: 'Instrument used by doctors to listen to heart and lungs' },
    { word: 'BOOMERANG', hint: 'Throwing stick that returns to the thrower' },
    { word: 'SEAHORSE', hint: 'Small marine fish with a horse-like head' },
    { word: 'TULIP', hint: 'Spring-blooming flower with bulbous roots' },
    { word: 'CANOE', hint: 'Light narrow boat with pointed ends' },
    { word: 'KOALA', hint: 'Tree-dwelling marsupial native to Australia' },
    { word: 'CUPCAKE', hint: 'Small cake baked in a cup-shaped container' },
    { word: 'ZEBRA', hint: 'African wild horse with black-and-white stripes' },
    { word: 'VIOLIN', hint: 'String instrument played with a bow' },
    { word: 'TELEPHONE', hint: 'Device used for voice communication over distances' },
    { word: 'LAPTOP', hint: 'Portable personal computer' },
    { word: 'MARIMBA', hint: 'Percussion instrument similar to a xylophone' },
    { word: 'SATURN', hint: 'Planet known for its rings' },
    { word: 'OCTOPUS', hint: 'Marine animal with eight tentacles' },
    { word: 'YOGURT', hint: 'Dairy product made by fermenting milk' },
    { word: 'GRAPES', hint: 'Fruit that grows in clusters on vines' },
    { word: 'HIBISCUS', hint: 'Flowering plant known for its large, colorful blooms' },
    { word: 'MOSAIC', hint: 'Art form using small pieces of colored glass or stone' },
    { word: 'CATAPULT', hint: 'Device used to hurl objects a great distance' },
    { word: 'KIWI', hint: 'Fruit with brown skin and green flesh' },
    { word: 'AEROPLANE', hint: 'Powered flying vehicle with fixed wings' },
    { word: 'LANTERN', hint: 'Portable light source' },
    { word: 'SLIPPER', hint: 'Comfortable indoor shoe' },
    { word: 'MANGROVE', hint: 'Type of tree that grows in coastal swamps' },
    { word: 'PANCAKE', hint: 'Flat, round breakfast food' },
    { word: 'OPAL', hint: 'Precious stone known for its iridescent colors' },
    { word: 'CINNAMON', hint: 'Spice obtained from the inner bark of trees' },
    { word: 'PEACOCK', hint: 'Bird known for its colorful tail feathers' },
    { word: 'SUNRISE', hint: 'Daily event of the sun appearing over the horizon' },
    { word: 'SPAGHETTI', hint: 'Type of pasta in long, thin strands' },
    { word: 'SQUIRREL', hint: 'Small rodent known for its bushy tail' },
    { word: 'TROMBONE', hint: 'Brass instrument with a slide' },
    { word: 'TRIANGLE', hint: 'Three-sided geometric shape' },
    { word: 'MOUNTAINEER', hint: 'Person who climbs mountains' },
    { word: 'STRAWBERRY', hint: 'Red fruit with tiny seeds on its surface' },
    { word: 'FOUNTAIN', hint: 'Structure that sends water into the air' },
    { word: 'METEOR', hint: 'Space rock that burns upon entering Earth\'s atmosphere' },
    { word: 'SCORPION', hint: 'Arachnid known for its venomous sting' },
    { word: 'JELLYFISH', hint: 'Marine animal with a gelatinous body and tentacles' },
    { word: 'HYENA', hint: 'Carnivorous animal known for its laugh-like call' },
    { word: 'CAROUSEL', hint: 'Amusement ride consisting of a rotating platform with seats' },
    { word: 'PEANUT', hint: 'Legume often mistaken for a nut' },
    { word: 'PAPERCLIP', hint: 'Small device used to hold sheets of paper together' },
    { word: 'ROSEMARY', hint: 'Herb used in cooking and aromatherapy' },
    { word: 'PUMPKIN', hint: 'Large orange squash often carved for Halloween' },
    { word: 'JUPITER', hint: 'Largest planet in the solar system' },
    { word: 'ACCORDION', hint: 'Musical instrument with a keyboard and bellows' },
    { word: 'ALBATROSS', hint: 'Large seabird known for its long wingspan' },
    { word: 'AVOCADO', hint: 'Fruit with a creamy texture and large seed' },
    { word: 'BACKPACK', hint: 'Bag carried on the back' },
    { word: 'BANYAN', hint: 'Type of fig tree known for its aerial roots' },
    { word: 'BARNACLE', hint: 'Marine crustacean that attaches itself to surfaces' },
    { word: 'BINOCULARS', hint: 'Optical instrument for viewing distant objects' },
    { word: 'BOUQUET', hint: 'Arrangement of flowers' },
    { word: 'BRACELET', hint: 'Jewelry worn around the wrist' },
    { word: 'CAMERA', hint: 'Device used to capture photographs' },
    { word: 'CANYON', hint: 'Deep gorge with steep sides' },
    { word: 'CARROT', hint: 'Orange root vegetable' },
    { word: 'CELLO', hint: 'Large string instrument played with a bow' },
    { word: 'CITRUS', hint: 'Fruit family including oranges, lemons, and limes' },
    { word: 'CLARINET', hint: 'Woodwind instrument with a single reed' },
    { word: 'COCONUT', hint: 'Large tropical fruit with a hard shell and white flesh' },
    { word: 'CORAL', hint: 'Marine organism that forms reefs' },
    { word: 'CUCUMBER', hint: 'Green cylindrical vegetable' },
    { word: 'DANDELION', hint: 'Yellow flowering weed known for its puffball seed head' },
    { word: 'DRAGONFLY', hint: 'Insect known for its large eyes and swift flight' },
    { word: 'ECLIPSE', hint: 'Event where one celestial body moves into the shadow of another' },
    { word: 'EGGPLANT', hint: 'Purple vegetable also known as aubergine' },
    { word: 'FALCON', hint: 'Bird of prey known for its speed' },
    { word: 'FERN', hint: 'Non-flowering plant with feathery leaves' },
    { word: 'FLAMINGO', hint: 'Pink bird known for standing on one leg' },
    { word: 'FOSSIL', hint: 'Preserved remains or impression of an ancient organism' },
    { word: 'GIRAFFE', hint: 'Tallest land animal with a long neck' },
    { word: 'GLACIER', hint: 'Large mass of ice moving slowly over land' },
    { word: 'HAMMERHEAD', hint: 'Shark with a distinctive head shape' },
    { word: 'HARMONICA', hint: 'Small musical instrument played with the mouth' },
    { word: 'HIBERNATE', hint: 'To spend the winter in a dormant state' },
    { word: 'HURRICANE', hint: 'Powerful tropical storm with strong winds' },
    { word: 'ICEBERG', hint: 'Large floating mass of ice detached from a glacier' },
    { word: 'IGUANA', hint: 'Large lizard found in tropical areas' },
    { word: 'INKWELL', hint: 'Container for holding ink' },
    { word: 'JACUZZI', hint: 'Large whirlpool bathtub' },
    { word: 'JELLYBEAN', hint: 'Small, bean-shaped candy' },
    { word: 'KANGAROO', hint: 'Marsupial native to Australia known for hopping' },
    { word: 'KITE', hint: 'Toy flown in the wind at the end of a string' },
    { word: 'LADLE', hint: 'Large spoon used for serving soup' },
    { word: 'LADYBUG', hint: 'Small beetle with a red body and black spots' },
    { word: 'LAVA', hint: 'Molten rock expelled by a volcano' },
    { word: 'LIMESTONE', hint: 'Sedimentary rock used in building' },
    { word: 'LOBSTER', hint: 'Large marine crustacean with claws' }
];

// New elements for modern mode
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('high-score');
const gameHighScoreDisplay = document.getElementById('game-high-score-value');
const timerDisplay = document.getElementById('timer');
const hangmanDrawing = document.getElementById('hangman-drawing');
const wordDisplay = document.getElementById('word-display');
const hintDisplay = document.getElementById('hint-display');
const guessesDisplay = document.getElementById('guesses');
const usedLettersDisplay = document.getElementById('used-letters');
const guessInput = document.getElementById('guess-input');
const wordInput = document.getElementById('word-input');
const guessButton = document.getElementById('guess-button');
const wordButton = document.getElementById('word-button');
const hintButton = document.getElementById('hint-button');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
const playButton = document.getElementById('play-button');
const toggleThemeButton = document.getElementById('toggle-theme');

let selectedWord = '';
let selectedHint = '';
let guessedLetters = [];
let remainingGuesses = 6;
let hintUsed = false;
let timer;
let timeLeft = 60;
let score = 0;
let highScore = 0;
let gameInProgress = false;

// Load high score for modern mode
function loadHighScore() {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore !== null) {
        highScore = parseInt(savedHighScore, 10);
        highScoreDisplay.textContent = highScore;
        gameHighScoreDisplay.textContent = highScore;
    }
}

// Save high score for modern mode
function saveHighScore() {
    localStorage.setItem('highScore', highScore);
}

// Load theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Save theme
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Initialize modern mode game
function initializeGame() {
    const selectedItem = words[Math.floor(Math.random() * words.length)];
    selectedWord = selectedItem.word;
    selectedHint = selectedItem.hint;
    guessedLetters = [];
    remainingGuesses = 6;
    hintUsed = false;
    timeLeft = 60;
    updateDisplay();
    message.textContent = '';
    guessInput.value = '';
    wordInput.value = '';
    guessInput.focus();
    hintButton.disabled = false;
    guessButton.disabled = false;
    wordButton.disabled = false;
    guessInput.disabled = false;
    wordInput.disabled = false;
    hintDisplay.innerHTML = `<div>Initial Hint: ${selectedHint}</div>`;
    drawHangman();
    clearInterval(timer);
    startTimer();
    document.body.className = document.body.className.includes('dark-mode') ? 'dark-mode' : '';
    gameInProgress = true;
}

// Update display for modern mode
function updateDisplay() {
    wordDisplay.textContent = selectedWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
    guessesDisplay.textContent = `Remaining Guesses: ${remainingGuesses}`;
    usedLettersDisplay.textContent = `Used Letters: ${guessedLetters.join(', ')}`;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;
    timerDisplay.style.color = timeLeft > 30 ? '#00ff00' : timeLeft > 10 ? '#ffff00' : '#ff0000';
    scoreDisplay.textContent = `Score: ${score}`;
    gameHighScoreDisplay.textContent = highScore;
}

// Draw hangman for modern mode
function drawHangman() {
    const parts = [
        'M70 20 A15 15 0 1 1 70 50 A15 15 0 1 1 70 20', // Head (circle)
        'M70 50 L70 150', // Body
        'M70 60 L20 100',  // Left arm
        'M70 60 L120 100', // Right arm
        'M70 150 L20 190', // Left leg
        'M70 150 L120 190' // Right leg
    ];
    
    hangmanDrawing.innerHTML = `
        <svg width="200" height="200">
            <!-- Gallows -->
            <line x1="20" y1="20" x2="100" y2="20" stroke="white" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="50" stroke="white" stroke-width="2"/>
            <line x1="20" y1="20" x2="20" y2="200" stroke="white" stroke-width="2"/>
            <line x1="0" y1="200" x2="140" y2="200" stroke="white" stroke-width="2"/>
            <!-- Hangman -->
            ${parts.slice(0, 6 - remainingGuesses).map(d => `<path d="${d}" stroke="white" fill="none"/>`).join('')}
        </svg>
    `;
}

// Start timer for modern mode
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        checkGameStatus();
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Make a guess in modern mode
function makeGuess() {
    const guess = guessInput.value.toUpperCase();
    if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
        message.textContent = 'Please enter a single letter.';
        return;
    }
    
    if (guessedLetters.includes(guess)) {
        message.textContent = 'You already guessed that letter.';
        return;
    }
    
    guessedLetters.push(guess);
    
    if (selectedWord.includes(guess)) {
        document.body.classList.add('correct');
        setTimeout(() => document.body.classList.remove('correct'), 500);
    } else {
        remainingGuesses--;
        document.body.classList.add('incorrect');
        setTimeout(() => document.body.classList.remove('incorrect'), 500);
        drawHangman();
    }
    
    updateDisplay();
    checkGameStatus();
    guessInput.value = '';
    guessInput.focus();
}

// Guess the whole word in modern mode
function guessWord() {
    const guess = wordInput.value.toUpperCase();
    if (guess.length === 0) {
        message.textContent = 'Please enter a word.';
        return;
    }
    
    if (guess === selectedWord) {
        guessedLetters = selectedWord.split('');
        const roundScore = calculateScore(true);
        updateScore(score + roundScore);
        if (score > highScore) {
            updateHighScore(score);
            saveHighScore();
        }
        message.textContent = 'Congratulations! You won!';
        updateDisplay(); // Update display to show the full word
        document.body.classList.add('correct');
        setTimeout(() => document.body.classList.remove('correct'), 500);
        endRound();
    } else {
        remainingGuesses--;
        document.body.classList.add('incorrect');
        setTimeout(() => document.body.classList.remove('incorrect'), 500);
        message.textContent = 'Incorrect guess.';
        wordInput.value = '';
        wordInput.focus();
        drawHangman();
        updateDisplay();
        checkGameStatus();
    }
}

// Check game status for modern mode
function checkGameStatus() {
    if (wordDisplay.textContent.replace(/\s/g, '') === selectedWord) {
        const roundScore = calculateScore();
        updateScore(score + roundScore);
        if (score > highScore) {
            updateHighScore(score);
            saveHighScore();
        }
        message.textContent = 'Congratulations! You won!';
        endRound();
    } else if (remainingGuesses === 0) {
        message.textContent = `Game over. The word was ${selectedWord}.`;
        endRound();
    } else if (timeLeft === 0) {
        message.textContent = `Time's up! The word was ${selectedWord}.`;
        endRound();
    }
}

// End the round in modern mode
function endRound() {
    clearInterval(timer);
    gameInProgress = false;
    guessButton.disabled = true;
    wordButton.disabled = true;
    guessInput.disabled = true;
    wordInput.disabled = true;
    hintButton.disabled = true;
    highScoreDisplay.textContent = highScore;
    setTimeout(initializeGame, 2000); // Set a delay before starting the next round
}

// End the game in modern mode
function endGame() {
    clearInterval(timer);
    guessButton.disabled = true;
    wordButton.disabled = true;
    guessInput.disabled = true;
    wordInput.disabled = true;
    hintButton.disabled = true;
}

// Get a hint in modern mode
function getHint() {
    if (!hintUsed) {
        const unguessedLetters = selectedWord.split('').filter(letter => !guessedLetters.includes(letter));
        const hintLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
        const hintElement = document.createElement('div');
        hintElement.textContent = `Hint: The word contains the letter "${hintLetter}"`;
        hintDisplay.appendChild(hintElement);
        hintUsed = true;
        hintButton.disabled = true;
    }
}

// Calculate score for modern mode
function calculateScore(guessedWord = false) {
    const baseScore = guessedWord ? 100 : 0;
    return baseScore + timeLeft * 10 - (6 - remainingGuesses) * 5;
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    saveTheme(theme);
}

// Update score display
function updateScore(newScore) {
    score = newScore;
    scoreDisplay.textContent = `Score: ${score}`;
    scoreDisplay.classList.add('scaling');
    setTimeout(() => {
        scoreDisplay.classList.remove('scaling');
    }, 500);
}

// Update high score display
function updateHighScore(newHighScore) {
    highScore = newHighScore;
    gameHighScoreDisplay.textContent = highScore;
    gameHighScoreDisplay.classList.add('scaling');
    setTimeout(() => {
        gameHighScoreDisplay.classList.remove('scaling');
    }, 500);
}

// New elements for classic mode
const classicGameScreen = document.getElementById('classic-game-screen');
const classicScoreDisplay = document.getElementById('classic-score');
const classicHighScoreDisplay = document.getElementById('classic-high-score');
const classicTimerDisplay = document.getElementById('classic-timer');
const classicHangmanDrawing = document.getElementById('classic-hangman-drawing');
const classicWordDisplay = document.getElementById('classic-word-display');
const classicHintDisplay = document.getElementById('classic-hint-display');
const classicKeyboard = document.getElementById('classic-keyboard');
const classicMessage = document.getElementById('classic-message');
const classicHintButton = document.getElementById('classic-hint-button');
const classicResetButton = document.getElementById('classic-reset-button');
const playClassicButton = document.getElementById('play-classic-button');

let classicSelectedWord = '';
let classicSelectedHint = '';
let classicGuessedLetters = [];
let classicRemainingGuesses = 6;
let classicTimeLeft = 60;
let classicTimer;
let classicScore = 0;
let classicHighScore = 0;
let classicGameInProgress = false;
let classicHintUsed = false;

// Load high score for classic mode
function loadClassicHighScore() {
    const savedClassicHighScore = localStorage.getItem('classicHighScore');
    if (savedClassicHighScore !== null) {
        classicHighScore = parseInt(savedClassicHighScore, 10);
        classicHighScoreDisplay.textContent = classicHighScore;
    }
}

// Save high score for classic mode
function saveClassicHighScore() {
    localStorage.setItem('classicHighScore', classicHighScore);
}

// Initialize classic mode game
function initializeClassicGame() {
    const selectedItem = words[Math.floor(Math.random() * words.length)];
    classicSelectedWord = selectedItem.word;
    classicSelectedHint = selectedItem.hint;
    classicGuessedLetters = [];
    classicRemainingGuesses = 6;
    classicTimeLeft = 60;
    classicHintUsed = false;
    updateClassicDisplay();
    classicMessage.textContent = '';
    classicHintDisplay.innerHTML = `<div>Initial Hint: ${classicSelectedHint}</div>`;
    drawClassicHangman();
    clearInterval(classicTimer);
    startClassicTimer();
    createClassicKeyboard();
    document.body.className = document.body.className.includes('dark-mode') ? 'dark-mode' : '';
    classicGameInProgress = true;
}

// Update display for classic mode
function updateClassicDisplay() {
    classicWordDisplay.textContent = classicSelectedWord
        .split('')
        .map(letter => classicGuessedLetters.includes(letter) ? letter : '_')
        .join(' ');
    classicTimerDisplay.textContent = `Time Left: ${classicTimeLeft}`;
    classicScoreDisplay.textContent = `Score: ${classicScore}`;
    classicHighScoreDisplay.textContent = classicHighScore;
}

function drawClassicHangman() {
    const parts = [
        'M180 70 A20 20 0 1 1 180 110 A20 20 0 1 1 180 70', // Head (circle)
        'M180 110 L180 190', // Body
        'M180 130 L140 160',  // Left arm
        'M180 130 L220 160', // Right arm
        'M180 190 L140 230', // Left leg
        'M180 190 L220 230' // Right leg
    ];
    
    classicHangmanDrawing.innerHTML = `
        <svg width="240" height="240">
            <!-- Gallows -->
            <line x1="20" y1="20" x2="180" y2="20" stroke="white" stroke-width="2"/>
            <line x1="20" y1="20" x2="20" y2="230" stroke="white" stroke-width="2"/>
            <line x1="180" y1="20" x2="180" y2="50" stroke="white" stroke-width="2"/>
            <line x1="0" y1="230" x2="240" y2="230" stroke="white" stroke-width="2"/>
            <!-- Hangman -->
            ${parts.slice(0, 6 - classicRemainingGuesses).map(d => `<path d="${d}" stroke="white" fill="none"/>`).join('')}
        </svg>
    `;
}
// Start timer for classic mode
function startClassicTimer() {
    classicTimer = setInterval(() => {
        classicTimeLeft--;
        updateClassicDisplay();
        checkClassicGameStatus();
        if (classicTimeLeft <= 0) {
            clearInterval(classicTimer);
        }
    }, 1000);
}

function createClassicKeyboard() {
    classicKeyboard.innerHTML = '';
    const qwertyLayout = [
        'QWERTYUIOP',
        'ASDFGHJKL',
        'ZXCVBNM'
    ];

    qwertyLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keyboard-row');
        row.split('').forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.classList.add('classic-key');
            button.addEventListener('click', () => handleClassicKeyPress(letter, button));
            rowDiv.appendChild(button);
        });
        classicKeyboard.appendChild(rowDiv);
    });
}

function handleClassicKeyPress(letter, button) {
    button.disabled = true;
    if (classicSelectedWord.includes(letter)) {
        classicGuessedLetters.push(letter);
        button.style.display = 'none'; // Hide the button for correct guesses
        document.body.classList.add('correct');
        setTimeout(() => document.body.classList.remove('correct'), 500);
    } else {
        classicRemainingGuesses--;
        document.body.classList.add('incorrect');
        setTimeout(() => document.body.classList.remove('incorrect'), 500);
        drawClassicHangman();
    }
    updateClassicDisplay();
    checkClassicGameStatus();
}

// Check game status for classic mode
function checkClassicGameStatus() {
    if (classicWordDisplay.textContent.replace(/\s/g, '') === classicSelectedWord) {
        const roundScore = calculateClassicScore();
        updateClassicScore(classicScore + roundScore);
        if (classicScore > classicHighScore) {
            updateClassicHighScore(classicScore);
            saveClassicHighScore();
        }
        classicMessage.textContent = 'Congratulations! You won!';
        endClassicRound();
    } else if (classicRemainingGuesses === 0) {
        classicMessage.textContent = `Game over. The word was ${classicSelectedWord}.`;
        endClassicRound();
    } else if (classicTimeLeft === 0) {
        classicMessage.textContent = `Time's up! The word was ${classicSelectedWord}.`;
        endClassicRound();
    }
}

// End the round in classic mode
function endClassicRound() {
clearInterval(classicTimer);
classicGameInProgress = false;
document.querySelectorAll('.classic-key').forEach(button => button.disabled = true);
setTimeout(initializeClassicGame, 2000); // Set a delay before starting the next round
}

// End the game in classic mode
function endClassicGame() {
clearInterval(classicTimer);
document.querySelectorAll('.classic-key').forEach(button => button.disabled = true);
}

// Get a hint in classic mode
function getClassicHint() {
if (!classicHintUsed) {
    const unguessedLetters = classicSelectedWord.split('').filter(letter => !classicGuessedLetters.includes(letter));
    const hintLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
    const hintElement = document.createElement('div');
    hintElement.textContent = `Hint: The word contains the letter "${hintLetter}"`;
    classicHintDisplay.appendChild(hintElement);
    classicHintUsed = true;
    classicHintButton.disabled = true;
}
}

// Calculate score for classic mode
function calculateClassicScore() {
return 100 + classicTimeLeft * 10 - (6 - classicRemainingGuesses) * 5;
}

// Update score display for classic mode
function updateClassicScore(newScore) {
classicScore = newScore;
classicScoreDisplay.textContent = `Score: ${classicScore}`;
classicScoreDisplay.classList.add('scaling');
setTimeout(() => {
    classicScoreDisplay.classList.remove('scaling');
}, 500);
}

// Update high score display for classic mode
function updateClassicHighScore(newHighScore) {
classicHighScore = newHighScore;
classicHighScoreDisplay.textContent = classicHighScore;
classicHighScoreDisplay.classList.add('scaling');
setTimeout(() => {
    classicHighScoreDisplay.classList.remove('scaling');
}, 500);
}

// Event listeners
playButton.addEventListener('click', () => {
startScreen.style.display = 'none';
gameScreen.style.display = 'block';
initializeGame();
});

playClassicButton.addEventListener('click', () => {
startScreen.style.display = 'none';
classicGameScreen.style.display = 'block';
initializeClassicGame();
});

guessButton.addEventListener('click', makeGuess);
wordButton.addEventListener('click', guessWord);
guessInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') makeGuess();
});
wordInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') guessWord();
});
hintButton.addEventListener('click', getHint);
resetButton.addEventListener('click', () => {
updateScore(0);
initializeGame();
});
classicHintButton.addEventListener('click', getClassicHint);
classicResetButton.addEventListener('click', () => {
updateClassicScore(0);
initializeClassicGame();
});
toggleThemeButton.addEventListener('click', toggleTheme);

window.addEventListener('load', () => {
loadHighScore();
loadClassicHighScore();
loadTheme();
});