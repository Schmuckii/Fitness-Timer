/* ═══════════════════════════════════════════
   INTERNATIONALIZATION
   ═══════════════════════════════════════════ */
const i18n = {
    en: {
        myWorkouts: "My Workouts",
        newWorkout: "+ New Workout",
        noWorkouts: "No workouts yet. Create your first one!",
        editWorkout: "Edit Workout",
        createWorkout: "Create Workout",
        workoutName: "Workout Name",
        workoutNamePlaceholder: "e.g. Full Body",
        exercises: "Exercises",
        addExercise: "+ Add Exercise",
        editExercise: "Edit Exercise",
        noExercises: "No exercises yet. Add one to get started!",
        totalDuration: "Total Duration",
        saveWorkout: "💾 Save Workout",
        startWorkout: "Start Workout 🚀",
        exerciseName: "Exercise Name",
        exercisePlaceholder: "e.g. Push-ups",
        setDuration: "Set Duration (sec)",
        restDuration: "Rest Duration (sec)",
        cancel: "Cancel",
        save: "Save",
        pause: "Pause",
        resume: "Resume",
        skip: "Skip",
        upNext: "Up Next",
        getReady: "Get Ready",
        set: "Set",
        rest: "Rest",
        workoutComplete: "Workout Complete!",
        backHome: "Back to Home",
        setLabel: "Set",
        restLabel: "Rest",
        setsCount: "Sets",
        setsLabel: "Sets",
        setOf: (cur, total) => `Set ${cur}/${total}`,
        exerciseCount: (n) => `${n} exercise${n !== 1 ? "s" : ""}`,
        doneSummary: (n) => `You completed ${n} exercise${n !== 1 ? "s" : ""}. Great job! 💪`,
        exerciseRequired: "Please add at least one exercise.",
        nameRequired: "Please enter an exercise name.",
        workoutNameRequired: "Please enter a workout name.",
        deleteConfirm: "Delete this workout?",
    },
    de: {
        myWorkouts: "Meine Workouts",
        newWorkout: "+ Neues Workout",
        noWorkouts: "Noch keine Workouts. Erstelle dein erstes!",
        editWorkout: "Workout bearbeiten",
        createWorkout: "Workout erstellen",
        workoutName: "Workout-Name",
        workoutNamePlaceholder: "z.B. Ganzkörper",
        exercises: "Übungen",
        addExercise: "+ Übung hinzufügen",
        editExercise: "Übung bearbeiten",
        noExercises: "Noch keine Übungen. Füge eine hinzu!",
        totalDuration: "Gesamtdauer",
        saveWorkout: "💾 Workout speichern",
        startWorkout: "Workout starten 🚀",
        exerciseName: "Übungsname",
        exercisePlaceholder: "z.B. Liegestütze",
        setDuration: "Satzdauer (Sek.)",
        restDuration: "Pausendauer (Sek.)",
        cancel: "Abbrechen",
        save: "Speichern",
        pause: "Pause",
        resume: "Weiter",
        skip: "Überspringen",
        upNext: "Als Nächstes",
        getReady: "Bereit machen",
        set: "Satz",
        rest: "Pause",
        workoutComplete: "Workout abgeschlossen!",
        backHome: "Zurück zur Startseite",
        setLabel: "Satz",
        restLabel: "Pause",
        setsCount: "Sätze",
        setsLabel: "Sätze",
        setOf: (cur, total) => `Satz ${cur}/${total}`,
        exerciseCount: (n) => `${n} Übung${n !== 1 ? "en" : ""}`,
        doneSummary: (n) => `Du hast ${n} Übung${n !== 1 ? "en" : ""} geschafft. Stark! 💪`,
        exerciseRequired: "Bitte füge mindestens eine Übung hinzu.",
        nameRequired: "Bitte gib einen Übungsnamen ein.",
        workoutNameRequired: "Bitte gib einen Workout-Namen ein.",
        deleteConfirm: "Dieses Workout löschen?",
    },
};

let currentLang = localStorage.getItem("fitLang") || "en";

function t(key) {
    return i18n[currentLang][key] || i18n.en[key] || key;
}

function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const val = i18n[currentLang][key];
        if (val && typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const val = i18n[currentLang][key];
        if (val) el.placeholder = val;
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        const val = i18n[currentLang][key];
        if (val) el.title = val;
    });
    document.getElementById("lang-label").textContent = currentLang === "en" ? "DE" : "EN";
}

/* ═══════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════ */
let workouts = [];          // Array of { id, name, exercises: [{name, sets, setDuration, restDuration}] }
let currentWorkout = null;  // The workout currently being edited / run
let editingExIndex = -1;    // Index of exercise being edited in modal
let isNewWorkout = false;

const CARD_COLORS = [
    "#00e5ff", "#00e676", "#ff9100", "#e040fb",
    "#ffeb3b", "#ff5252", "#448aff", "#69f0ae",
];

function getColor(i) {
    return CARD_COLORS[i % CARD_COLORS.length];
}

/* ═══════════════════════════════════════════
   DOM REFERENCES
   ═══════════════════════════════════════════ */
const $ = (id) => document.getElementById(id);

const homeScreen = $("home-screen");
const editorScreen = $("editor-screen");
const timerScreen = $("timer-screen");
const doneScreen = $("done-screen");
const workoutGrid = $("workout-grid");
const noWorkoutsMsg = $("no-workouts-msg");
const exerciseList = $("exercise-list");
const noExMsg = $("no-exercises-msg");
const modal = $("exercise-modal");

/* ═══════════════════════════════════════════
   SCREEN NAVIGATION
   ═══════════════════════════════════════════ */
function showScreen(screen) {
    [homeScreen, editorScreen, timerScreen, doneScreen].forEach((s) => s.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo(0, 0);
}

/* ═══════════════════════════════════════════
   WORKOUT PERSISTENCE
   ═══════════════════════════════════════════ */
function saveWorkouts() {
    localStorage.setItem("fitWorkouts", JSON.stringify(workouts));
}

function loadWorkouts() {
    try {
        const data = JSON.parse(localStorage.getItem("fitWorkouts"));
        if (Array.isArray(data)) workouts = data;
    } catch (_) { /* ignore */ }
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

/* ═══════════════════════════════════════════
   HOME SCREEN – WORKOUT LIST
   ═══════════════════════════════════════════ */
function renderWorkouts() {
    workoutGrid.innerHTML = "";
    noWorkoutsMsg.style.display = workouts.length ? "none" : "block";

    workouts.forEach((w, i) => {
        const totalSec = calcTotalDuration(w.exercises);
        const card = document.createElement("div");
        card.className = "workout-card glass";
        card.style.setProperty("--card-accent", getColor(i));
        card.innerHTML = `
      <style>.workout-card:nth-child(${i + 1})::before { background: ${getColor(i)}; }</style>
      <div class="workout-card-name">${escapeHtml(w.name)}</div>
      <div class="workout-card-meta">
        <span>🏋️ ${t("exerciseCount")(w.exercises.length)}</span>
        <span>⏱ ${formatTime(totalSec)}</span>
      </div>`;
        card.addEventListener("click", () => openEditor(w.id));
        workoutGrid.appendChild(card);
    });
}

/* ═══════════════════════════════════════════
   EDITOR SCREEN
   ═══════════════════════════════════════════ */
function openEditor(workoutId) {
    if (workoutId) {
        currentWorkout = JSON.parse(JSON.stringify(workouts.find((w) => w.id === workoutId)));
        isNewWorkout = false;
        $("editor-header-title").textContent = t("editWorkout");
        $("delete-workout-btn").style.display = "";
    } else {
        currentWorkout = { id: generateId(), name: "", exercises: [] };
        isNewWorkout = true;
        $("editor-header-title").textContent = t("createWorkout");
        $("delete-workout-btn").style.display = "none";
    }
    $("workout-name").value = currentWorkout.name;
    renderExercises();
    updateCalcDuration();
    showScreen(editorScreen);
}

function saveCurrentWorkout() {
    const name = $("workout-name").value.trim();
    if (!name) { alert(t("workoutNameRequired")); return false; }
    currentWorkout.name = name;

    const existingIdx = workouts.findIndex((w) => w.id === currentWorkout.id);
    if (existingIdx >= 0) {
        workouts[existingIdx] = currentWorkout;
    } else {
        workouts.push(currentWorkout);
    }
    saveWorkouts();
    return true;
}

function deleteCurrentWorkout() {
    if (!confirm(t("deleteConfirm"))) return;
    workouts = workouts.filter((w) => w.id !== currentWorkout.id);
    saveWorkouts();
    renderWorkouts();
    showScreen(homeScreen);
}

/* ═══════════════════════════════════════════
   EXERCISE MANAGEMENT
   ═══════════════════════════════════════════ */
function renderExercises() {
    exerciseList.innerHTML = "";
    const exs = currentWorkout.exercises;
    noExMsg.style.display = exs.length ? "none" : "block";

    exs.forEach((ex, i) => {
        const li = document.createElement("li");
        li.className = "exercise-item";
        li.innerHTML = `
      <div class="ex-color" style="background:${getColor(i)}"></div>
      <div class="ex-info">
        <div class="ex-name">${escapeHtml(ex.name)}</div>
        <div class="ex-meta">${ex.sets || 1}× ${t("setLabel")}: ${ex.setDuration}s · ${t("restLabel")}: ${ex.restDuration}s</div>
      </div>
      <div class="ex-actions">
        <button class="btn-edit" title="Edit" data-index="${i}">✏️</button>
        <button class="btn-delete" title="Delete" data-index="${i}">🗑️</button>
      </div>`;
        exerciseList.appendChild(li);
    });
}

function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
}

/* ═══════════════════════════════════════════
   DURATION CALCULATION
   ═══════════════════════════════════════════ */
function calcTotalDuration(exercises) {
    return exercises.reduce((sum, ex) => {
        const sets = ex.sets || 1;
        return sum + sets * (ex.setDuration + ex.restDuration);
    }, 0);
}

function updateCalcDuration() {
    const total = calcTotalDuration(currentWorkout.exercises);
    $("calc-duration").textContent = formatTime(total);
}

/* ═══════════════════════════════════════════
   EXERCISE MODAL
   ═══════════════════════════════════════════ */
function openModal(index = -1) {
    editingExIndex = index;
    if (index >= 0) {
        const ex = currentWorkout.exercises[index];
        $("ex-name").value = ex.name;
        $("ex-sets").value = ex.sets || 1;
        $("ex-set-duration").value = ex.setDuration;
        $("ex-rest-duration").value = ex.restDuration;
        $("modal-title").textContent = t("editExercise");
    } else {
        $("ex-name").value = "";
        $("ex-sets").value = 3;
        $("ex-set-duration").value = 40;
        $("ex-rest-duration").value = 20;
        $("modal-title").textContent = t("addExercise");
    }
    modal.hidden = false;
    $("ex-name").focus();
}

function closeModal() {
    modal.hidden = true;
    editingExIndex = -1;
}

function saveModal() {
    const name = $("ex-name").value.trim();
    if (!name) { alert(t("nameRequired")); return; }
    const sets = Math.max(1, parseInt($("ex-sets").value) || 3);
    const setDur = Math.max(1, parseInt($("ex-set-duration").value) || 40);
    const restDur = Math.max(0, parseInt($("ex-rest-duration").value) || 0);

    if (editingExIndex >= 0) {
        currentWorkout.exercises[editingExIndex] = { name, sets, setDuration: setDur, restDuration: restDur };
    } else {
        currentWorkout.exercises.push({ name, sets, setDuration: setDur, restDuration: restDur });
    }
    renderExercises();
    updateCalcDuration();
    closeModal();
}

/* ═══════════════════════════════════════════
   TIMER ENGINE
   ═══════════════════════════════════════════ */
let timerInterval = null;
let isPaused = false;
let totalTimeRemaining = 0;
let phaseTimeRemaining = 0;
let phaseDuration = 0;
let currentExIndex = 0;
let currentSetNum = 1;      // current set number (1-based)
let currentPhase = "set";   // "set" | "rest"
const RING_CIRCUMFERENCE = 2 * Math.PI * 120; // ≈753.98

function startWorkout() {
    if (currentWorkout.exercises.length === 0) {
        alert(t("exerciseRequired"));
        return;
    }
    // Auto-save before starting
    if (!saveCurrentWorkout()) return;
    renderWorkouts();

    totalTimeRemaining = calcTotalDuration(currentWorkout.exercises);
    currentExIndex = 0;
    currentSetNum = 1;
    currentPhase = "set";
    isPaused = false;
    setPhaseTime(currentWorkout.exercises[0].setDuration);

    $("timer-workout-name").textContent = currentWorkout.name;
    $("pause-btn").textContent = t("pause");
    $("pause-btn").classList.remove("btn-outline");
    $("pause-btn").classList.add("btn-accent");

    updateTimerUI();
    showScreen(timerScreen);

    clearInterval(timerInterval);
    timerInterval = setInterval(tick, 1000);
}

function setPhaseTime(seconds) {
    phaseDuration = seconds;
    phaseTimeRemaining = seconds;
}

function tick() {
    if (isPaused) return;

    phaseTimeRemaining--;
    totalTimeRemaining--;

    if (totalTimeRemaining <= 0) {
        finishWorkout();
        return;
    }

    if (phaseTimeRemaining <= 0) {
        advancePhase();
    }

    updateTimerUI();
}

function advancePhase() {
    playBeep();
    const ex = currentWorkout.exercises[currentExIndex];
    if (currentPhase === "set") {
        if (ex.restDuration > 0) {
            currentPhase = "rest";
            setPhaseTime(ex.restDuration);
        } else {
            advanceSet();
        }
    } else {
        // rest just finished
        advanceSet();
    }
}

function advanceSet() {
    const ex = currentWorkout.exercises[currentExIndex];
    const totalSets = ex.sets || 1;
    if (currentSetNum < totalSets) {
        // Next set of the same exercise
        currentSetNum++;
        currentPhase = "set";
        setPhaseTime(ex.setDuration);
    } else {
        // All sets done → next exercise
        nextExercise();
    }
}

function nextExercise() {
    currentExIndex++;
    if (currentExIndex >= currentWorkout.exercises.length) {
        currentExIndex = 0; // loop
    }
    currentSetNum = 1;
    currentPhase = "set";
    setPhaseTime(currentWorkout.exercises[currentExIndex].setDuration);
}

function skipPhase() {
    if (isPaused) return;
    totalTimeRemaining -= phaseTimeRemaining;
    if (totalTimeRemaining <= 0) { finishWorkout(); return; }
    advancePhase();
    updateTimerUI();
}

function togglePause() {
    isPaused = !isPaused;
    $("pause-btn").textContent = isPaused ? t("resume") : t("pause");
    if (isPaused) {
        $("pause-btn").classList.add("btn-outline");
        $("pause-btn").classList.remove("btn-accent");
    } else {
        $("pause-btn").classList.remove("btn-outline");
        $("pause-btn").classList.add("btn-accent");
    }
}

function finishWorkout() {
    clearInterval(timerInterval);
    timerInterval = null;
    const count = currentWorkout.exercises.length;
    $("done-summary").textContent = t("doneSummary")(count);
    applyI18n();
    showScreen(doneScreen);
}

function goBackFromTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    openEditor(currentWorkout.id);
}

/* ═══════════════════════════════════════════
   TIMER UI UPDATE
   ═══════════════════════════════════════════ */
function updateTimerUI() {
    $("timer-countdown").textContent = formatTime(phaseTimeRemaining);
    $("timer-total-remaining").textContent = formatTime(totalTimeRemaining);

    if (currentWorkout.exercises[currentExIndex]) {
        $("timer-exercise-name").textContent = currentWorkout.exercises[currentExIndex].name;
    }

    // Set counter
    const ex = currentWorkout.exercises[currentExIndex];
    const totalSets = ex?.sets || 1;
    $("timer-set-counter").textContent = totalSets > 1 ? t("setOf")(currentSetNum, totalSets) : "";

    const phaseLabel = $("timer-phase-label");
    const ring = $("timer-ring-progress");

    if (currentPhase === "set") {
        phaseLabel.textContent = t("set");
        phaseLabel.classList.remove("rest");
        ring.classList.remove("rest");
    } else {
        phaseLabel.textContent = t("rest");
        phaseLabel.classList.add("rest");
        ring.classList.add("rest");
    }

    const progress = phaseDuration > 0 ? phaseTimeRemaining / phaseDuration : 0;
    const offset = RING_CIRCUMFERENCE * (1 - progress);
    ring.style.strokeDashoffset = offset;

    updateUpNext();
}

function updateUpNext() {
    let nextName = "—";
    const exs = currentWorkout.exercises;
    const ex = exs[currentExIndex];
    const totalSets = ex?.sets || 1;

    if (currentPhase === "set" && ex?.restDuration > 0) {
        nextName = `${t("rest")} (${ex.restDuration}s)`;
    } else if (currentSetNum < totalSets) {
        // More sets of the same exercise
        nextName = `${ex.name} — ${t("setOf")(currentSetNum + 1, totalSets)}`;
    } else {
        const nextI = (currentExIndex + 1) % exs.length;
        nextName = exs[nextI]?.name || "—";
    }
    $("up-next-name").textContent = nextName;
}

function formatTime(sec) {
    if (sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ═══════════════════════════════════════════
   AUDIO
   ═══════════════════════════════════════════ */
let audioCtx = null;

function playBeep() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 880;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.3);
    } catch (_) { /* audio not available */ }
}

/* ═══════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
    loadWorkouts();
    renderWorkouts();
    applyI18n();

    // Language toggle
    $("lang-toggle").addEventListener("click", () => {
        currentLang = currentLang === "en" ? "de" : "en";
        localStorage.setItem("fitLang", currentLang);
        applyI18n();
        renderWorkouts();
        if (currentWorkout) renderExercises();
    });

    // Home – create new workout
    $("create-workout-btn").addEventListener("click", () => openEditor(null));

    // Editor – back to home
    $("editor-back-btn").addEventListener("click", () => {
        renderWorkouts();
        showScreen(homeScreen);
    });

    // Editor – delete workout
    $("delete-workout-btn").addEventListener("click", deleteCurrentWorkout);

    // Editor – add exercise
    $("add-exercise-btn").addEventListener("click", () => openModal(-1));

    // Editor – save workout
    $("save-workout-btn").addEventListener("click", () => {
        if (saveCurrentWorkout()) {
            renderWorkouts();
            showScreen(homeScreen);
        }
    });

    // Editor – start workout
    $("start-btn").addEventListener("click", startWorkout);

    // Modal
    $("modal-cancel").addEventListener("click", closeModal);
    $("modal-save").addEventListener("click", saveModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    modal.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveModal();
        if (e.key === "Escape") closeModal();
    });

    // Exercise list delegation
    exerciseList.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const idx = parseInt(btn.dataset.index);
        if (btn.classList.contains("btn-edit")) {
            openModal(idx);
        } else if (btn.classList.contains("btn-delete")) {
            currentWorkout.exercises.splice(idx, 1);
            renderExercises();
            updateCalcDuration();
        }
    });

    // Timer controls
    $("pause-btn").addEventListener("click", togglePause);
    $("skip-btn").addEventListener("click", skipPhase);
    $("timer-back-btn").addEventListener("click", goBackFromTimer);

    // Done screen
    $("done-btn").addEventListener("click", () => {
        renderWorkouts();
        showScreen(homeScreen);
    });
});
