// ========== ЗАДАНИЕ 1: ИМЯ ПОЛЬЗОВАТЕЛЯ ==========
const nameInput = document.getElementById('nameInput');
const saveNameBtn = document.getElementById('saveNameBtn');
const greeting = document.getElementById('greeting');

// Загрузка имени при запуске
function loadName() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        nameInput.value = savedName;
        greeting.textContent = 'Привет, ' + savedName + '! 👋';
    }
}

// Сохранение имени
saveNameBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem('userName', name);
        greeting.textContent = 'Привет, ' + name + '! 👋';
    } else {
        greeting.textContent = 'Пожалуйста, введите имя';
    }
});

// Сохранение по Enter
nameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saveNameBtn.click();
    }
});

loadName();

// ========== ЗАДАНИЕ 2: СЧЁТЧИК ==========
const counterDisplay = document.getElementById('counterDisplay');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');

let counter = 0;

// Загрузка счётчика
function loadCounter() {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter !== null) {
        counter = parseInt(savedCounter);
        counterDisplay.textContent = counter;
    }
}

// Сохранение счётчика
function saveCounter() {
    localStorage.setItem('counter', counter);
    counterDisplay.textContent = counter;
}

incrementBtn.addEventListener('click', function() {
    counter++;
    saveCounter();
});

decrementBtn.addEventListener('click', function() {
    counter--;
    saveCounter();
});

loadCounter();

// ========== ЗАДАНИЕ 3: ТАЙМЕР ==========
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let seconds = 0;
let timerInterval = null;

// Форматирование времени
function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    const minStr = String(minutes).padStart(2, '0');
    const secStr = String(remainingSeconds).padStart(2, '0');
    return minStr + ':' + secStr;
}

// Обновление дисплея
function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

// Запуск таймера
startBtn.addEventListener('click', function() {
    if (timerInterval === null) {
        timerInterval = setInterval(function() {
            seconds++;
            updateTimerDisplay();
        }, 1000);
        
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
});

// Остановка таймера
stopBtn.addEventListener('click', function() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
        
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
});

updateTimerDisplay();