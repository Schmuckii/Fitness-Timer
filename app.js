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
        trackReps: "Track Reps",
        reps: "Reps",
        repsConfirmTitle: "Reps Completed?",
        confirmFull: "Confirm",
        repsSummaryTitle: "Reps Summary",
        trackWeight: "Track Weight",
        weight: "Weight",
        weightConfirmTitle: "Weight Used?",
        weightSummaryTitle: "Weight Summary",
        rewind10: "−10s",
        prevExercise: "⏮ Previous Exercise",
        calendar: "Calendar",
        history: "History",
        noWorkoutsOnDay: "No workouts on this day.",
        duration: "Duration",
        workoutDetail: "Workout Detail",
        close: "Close",
        deleteHistoryConfirm: "Delete this history entry?",
        likeWorkout: "Like",
        unlikeWorkout: "Unlike",
        exportWorkouts: "Export",
        importWorkouts: "Import",
        selectWorkouts: "Select",
        exportSelected: "Export Selected",
        cancelSelection: "Cancel",
        noWorkoutsSelected: "Please select at least one workout.",
        importSuccess: (n) => `${n} workout${n !== 1 ? "s" : ""} imported successfully!`,
        importError: "Could not read the file. Please check the format.",
        importPreviewTitle: "Import Workouts",
        importConfirm: "Import",
        duplicateWarning: "(already exists)",
        settings: "Settings",
        settingsTitle: "Settings",
        weightUnit: "Weight Unit",
        defaultSets: "Default Sets",
        defaultSetDuration: "Default Set Duration (sec)",
        defaultRestDuration: "Default Rest Duration (sec)",
        defaultReps: "Default Reps",
        defaultWeight: "Default Weight",
        settingsSaved: "Settings saved!",
        weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
        trackReps: "WDH erfassen",
        reps: "WDH",
        repsConfirmTitle: "WDH geschafft?",
        confirmFull: "Bestätigen",
        repsSummaryTitle: "WDH Übersicht",
        trackWeight: "Gewicht erfassen",
        weight: "Gewicht",
        weightConfirmTitle: "Gewicht verwendet?",
        weightSummaryTitle: "Gewicht Übersicht",
        rewind10: "−10s",
        prevExercise: "⏮ Vorherige Übung",
        calendar: "Kalender",
        history: "Verlauf",
        noWorkoutsOnDay: "Keine Workouts an diesem Tag.",
        duration: "Dauer",
        workoutDetail: "Workout-Detail",
        close: "Schließen",
        deleteHistoryConfirm: "Diesen Verlaufseintrag löschen?",
        likeWorkout: "Gefällt mir",
        unlikeWorkout: "Gefällt mir nicht mehr",
        exportWorkouts: "Exportieren",
        importWorkouts: "Importieren",
        selectWorkouts: "Auswählen",
        exportSelected: "Auswahl exportieren",
        cancelSelection: "Abbrechen",
        noWorkoutsSelected: "Bitte wähle mindestens ein Workout aus.",
        importSuccess: (n) => `${n} Workout${n !== 1 ? "s" : ""} erfolgreich importiert!`,
        importError: "Datei konnte nicht gelesen werden. Bitte Format prüfen.",
        importPreviewTitle: "Workouts importieren",
        importConfirm: "Importieren",
        duplicateWarning: "(existiert bereits)",
        settings: "Einstellungen",
        settingsTitle: "Einstellungen",
        weightUnit: "Gewichtseinheit",
        defaultSets: "Standard-Sätze",
        defaultSetDuration: "Standard-Satzdauer (Sek.)",
        defaultRestDuration: "Standard-Pausendauer (Sek.)",
        defaultReps: "Standard-WDH",
        defaultWeight: "Standard-Gewicht",
        settingsSaved: "Einstellungen gespeichert!",
        weekdaysShort: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
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
let likedWorkouts = new Set(); // Set of liked workout IDs
let selectionMode = false;     // Whether multi-select mode is active
let selectedWorkouts = new Set(); // Set of selected workout IDs for export

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
const calendarScreen = $("calendar-screen");
const settingsScreen = $("settings-screen");
const workoutGrid = $("workout-grid");
const noWorkoutsMsg = $("no-workouts-msg");
const exerciseList = $("exercise-list");
const noExMsg = $("no-exercises-msg");
const modal = $("exercise-modal");
const repsModal = $("reps-modal");
const dayDetailModal = $("day-detail-modal");

/* ═══════════════════════════════════════════
   SCREEN NAVIGATION
   ═══════════════════════════════════════════ */
function showScreen(screen) {
    [homeScreen, editorScreen, timerScreen, doneScreen, calendarScreen, settingsScreen].forEach((s) => s.classList.remove("active"));
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
   APP SETTINGS
   ═══════════════════════════════════════════ */
const DEFAULT_SETTINGS = {
    weightUnit: "kg",
    defaultSets: 3,
    defaultSetDuration: 40,
    defaultRestDuration: 20,
    defaultReps: 20,
    defaultWeight: 20,
};

let appSettings = { ...DEFAULT_SETTINGS };

function saveSettings() {
    localStorage.setItem("fitSettings", JSON.stringify(appSettings));
}

function loadSettings() {
    try {
        const data = JSON.parse(localStorage.getItem("fitSettings"));
        if (data && typeof data === "object") appSettings = { ...DEFAULT_SETTINGS, ...data };
    } catch (_) { /* ignore */ }
}

function getWeightUnit() {
    return appSettings.weightUnit || "kg";
}

function openSettings() {
    $("settings-weight-unit").value = appSettings.weightUnit;
    $("settings-default-sets").value = appSettings.defaultSets;
    $("settings-default-set-duration").value = appSettings.defaultSetDuration;
    $("settings-default-rest-duration").value = appSettings.defaultRestDuration;
    $("settings-default-reps").value = appSettings.defaultReps;
    $("settings-default-weight").value = appSettings.defaultWeight;
    showScreen(settingsScreen);
}

function saveSettingsFromUI() {
    appSettings.weightUnit = $("settings-weight-unit").value;
    appSettings.defaultSets = Math.max(1, parseInt($("settings-default-sets").value) || 3);
    appSettings.defaultSetDuration = Math.max(1, parseInt($("settings-default-set-duration").value) || 40);
    appSettings.defaultRestDuration = Math.max(0, parseInt($("settings-default-rest-duration").value) || 20);
    appSettings.defaultReps = Math.max(1, parseInt($("settings-default-reps").value) || 20);
    appSettings.defaultWeight = Math.max(0, parseFloat($("settings-default-weight").value) || 20);
    saveSettings();
    renderWorkouts();
    showScreen(homeScreen);
}

/* ═══════════════════════════════════════════
   LIKED WORKOUTS PERSISTENCE
   ═══════════════════════════════════════════ */
function saveLiked() {
    localStorage.setItem("fitLikedWorkouts", JSON.stringify([...likedWorkouts]));
}

function loadLiked() {
    try {
        const data = JSON.parse(localStorage.getItem("fitLikedWorkouts"));
        if (Array.isArray(data)) likedWorkouts = new Set(data);
    } catch (_) { /* ignore */ }
}

function toggleLike(workoutId, e) {
    e.stopPropagation();
    if (likedWorkouts.has(workoutId)) {
        likedWorkouts.delete(workoutId);
    } else {
        likedWorkouts.add(workoutId);
    }
    saveLiked();
    renderWorkouts();
}

/* ═══════════════════════════════════════════
   WORKOUT HISTORY PERSISTENCE
   ═══════════════════════════════════════════ */
let workoutHistory = [];

function saveHistory() {
    localStorage.setItem("fitHistory", JSON.stringify(workoutHistory));
}

function loadHistory() {
    try {
        const data = JSON.parse(localStorage.getItem("fitHistory"));
        if (Array.isArray(data)) workoutHistory = data;
    } catch (_) { /* ignore */ }
}

function saveToHistory() {
    const entry = {
        id: generateId(),
        date: new Date().toISOString(),
        workoutName: currentWorkout.name,
        exercises: currentWorkout.exercises.map(ex => ({
            name: ex.name,
            sets: ex.sets || 1,
            setDuration: ex.setDuration,
            restDuration: ex.restDuration,
            trackReps: ex.trackReps || false,
            reps: ex.reps || 0,
            trackWeight: ex.trackWeight || false,
            weight: ex.weight || 0,
        })),
        repsLog: [...repsLog],
        weightLog: [...weightLog],
        durationSeconds: calcTotalDuration(currentWorkout.exercises),
    };
    workoutHistory.push(entry);
    saveHistory();
}

/* ═══════════════════════════════════════════
   HOME SCREEN – WORKOUT LIST
   ═══════════════════════════════════════════ */
function renderWorkouts() {
    workoutGrid.innerHTML = "";
    noWorkoutsMsg.style.display = workouts.length ? "none" : "block";

    // Sort: liked workouts first
    const sorted = [...workouts].sort((a, b) => {
        const aLiked = likedWorkouts.has(a.id) ? 1 : 0;
        const bLiked = likedWorkouts.has(b.id) ? 1 : 0;
        return bLiked - aLiked;
    });

    sorted.forEach((w, i) => {
        const totalSec = calcTotalDuration(w.exercises);
        const isLiked = likedWorkouts.has(w.id);
        const isSelected = selectedWorkouts.has(w.id);
        const card = document.createElement("div");
        card.className = "workout-card glass";
        if (isSelected) card.classList.add("selected");
        card.style.setProperty("--card-accent", getColor(i));
        card.innerHTML = `
      <style>.workout-card:nth-child(${i + 1})::before { background: ${getColor(i)}; }</style>
      ${selectionMode ? `<div class="workout-card-checkbox ${isSelected ? 'checked' : ''}" data-id="${w.id}">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>` : ''}
      <button class="workout-card-like ${isLiked ? 'liked' : ''}" data-id="${w.id}" title="${isLiked ? t('unlikeWorkout') : t('likeWorkout')}">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill="${isLiked ? 'var(--accent-red)' : 'none'}" stroke="${isLiked ? 'var(--accent-red)' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="workout-card-name">${escapeHtml(w.name)}</div>
      <div class="workout-card-meta">
        <span>🏋️ ${t("exerciseCount")(w.exercises.length)}</span>
        <span>⏱ ${formatTime(totalSec)}</span>
      </div>`;
        card.addEventListener("click", (e) => {
            if (selectionMode) {
                toggleSelection(w.id);
                return;
            }
            openEditor(w.id);
        });
        // Like button handler
        card.querySelector('.workout-card-like').addEventListener('click', (e) => toggleLike(w.id, e));
        // Checkbox handler
        const cb = card.querySelector('.workout-card-checkbox');
        if (cb) cb.addEventListener('click', (e) => { e.stopPropagation(); toggleSelection(w.id); });
        workoutGrid.appendChild(card);
    });

    // Update selection bar visibility
    updateSelectionBar();
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
        <div class="ex-meta">${ex.sets || 1}× ${t("setLabel")}: ${ex.setDuration}s · ${t("restLabel")}: ${ex.restDuration}s${ex.trackReps ? ` · ${ex.reps} ${t("reps")}` : ""}${ex.trackWeight ? ` · ${ex.weight}${getWeightUnit()}` : ""}</div>
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
        $("ex-track-reps").checked = !!ex.trackReps;
        $("ex-reps").value = ex.reps || appSettings.defaultReps;
        $("ex-track-weight").checked = !!ex.trackWeight;
        $("ex-weight").value = ex.weight || appSettings.defaultWeight;
        $("modal-title").textContent = t("editExercise");
    } else {
        $("ex-name").value = "";
        $("ex-sets").value = appSettings.defaultSets;
        $("ex-set-duration").value = appSettings.defaultSetDuration;
        $("ex-rest-duration").value = appSettings.defaultRestDuration;
        $("ex-track-reps").checked = false;
        $("ex-reps").value = appSettings.defaultReps;
        $("ex-track-weight").checked = false;
        $("ex-weight").value = appSettings.defaultWeight;
        $("modal-title").textContent = t("addExercise");
    }
    updateRepsFieldVisibility();
    updateWeightFieldVisibility();
    updateWeightUnitLabel();
    modal.hidden = false;
    $("ex-name").focus();
}

function updateRepsFieldVisibility() {
    $("reps-field").style.display = $("ex-track-reps").checked ? "" : "none";
}

function updateWeightFieldVisibility() {
    $("weight-field").style.display = $("ex-track-weight").checked ? "" : "none";
}

function updateWeightUnitLabel() {
    document.querySelectorAll(".weight-unit-label").forEach(el => {
        el.textContent = getWeightUnit();
    });
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
    const trackReps = $("ex-track-reps").checked;
    const reps = Math.max(1, parseInt($("ex-reps").value) || 20);
    const trackWeight = $("ex-track-weight").checked;
    const weight = Math.max(0, parseFloat($("ex-weight").value) || 0);

    const exData = { name, sets, setDuration: setDur, restDuration: restDur, trackReps, reps, trackWeight, weight };
    if (editingExIndex >= 0) {
        currentWorkout.exercises[editingExIndex] = exData;
    } else {
        currentWorkout.exercises.push(exData);
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

// Reps tracking state
let repsLog = [];           // Array of { exercise, set, repsTarget, repsActual }
let currentRepsCount = 0;   // Current value in the reps dialog
let pendingRepsTarget = 0;  // Target reps for the current dialog

// Weight tracking state
let weightLog = [];         // Array of { exercise, set, weightTarget, weightActual, unit }
let currentWeightValue = 0; // Current value in the weight dialog
let pendingWeightTarget = 0; // Target weight for the current dialog

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
    repsLog = [];
    weightLog = [];
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
        // Show combined confirmation dialog if reps or weight is tracked
        if (ex.trackReps || ex.trackWeight) {
            showSetConfirmDialog(ex);
            return;
        }
        continueAfterSet();
    } else {
        advanceSet();
    }
}

function continueAfterSet() {
    const ex = currentWorkout.exercises[currentExIndex];
    if (ex.restDuration > 0) {
        currentPhase = "rest";
        setPhaseTime(ex.restDuration);
    } else {
        advanceSet();
    }
}

/* ═══════════════════════════════════════════
   COMBINED SET CONFIRMATION DIALOG
   ═══════════════════════════════════════════ */
function showSetConfirmDialog(ex) {
    clearInterval(timerInterval);
    timerInterval = null;

    // Setup reps section
    const repsSection = $("confirm-reps-section");
    if (ex.trackReps) {
        pendingRepsTarget = ex.reps || 20;
        currentRepsCount = pendingRepsTarget;
        $("reps-current").textContent = currentRepsCount;
        $("reps-target").textContent = pendingRepsTarget;
        repsSection.style.display = "";
    } else {
        repsSection.style.display = "none";
    }

    // Setup weight section
    const weightSection = $("confirm-weight-section");
    if (ex.trackWeight) {
        pendingWeightTarget = ex.weight || appSettings.defaultWeight;
        currentWeightValue = pendingWeightTarget;
        $("weight-current").textContent = currentWeightValue;
        $("weight-target").textContent = pendingWeightTarget;
        $("weight-unit-display").textContent = getWeightUnit();
        weightSection.style.display = "";
    } else {
        weightSection.style.display = "none";
    }

    $("confirm-modal-exercise").textContent = `${ex.name} — ${t("setOf")(currentSetNum, ex.sets || 1)}`;
    $("confirm-modal-btn").textContent = t("confirmFull");

    repsModal.hidden = false;
}

function adjustReps(delta) {
    currentRepsCount = Math.max(0, Math.min(currentRepsCount + delta, 999));
    $("reps-current").textContent = currentRepsCount;
}

function adjustWeight(delta) {
    currentWeightValue = Math.max(0, Math.round((currentWeightValue + delta) * 10) / 10);
    $("weight-current").textContent = currentWeightValue;
}

function confirmSetDialog() {
    const ex = currentWorkout.exercises[currentExIndex];

    if (ex.trackReps) {
        repsLog.push({
            exercise: ex.name,
            set: currentSetNum,
            repsTarget: pendingRepsTarget,
            repsActual: currentRepsCount,
        });
    }

    if (ex.trackWeight) {
        weightLog.push({
            exercise: ex.name,
            set: currentSetNum,
            weightTarget: pendingWeightTarget,
            weightActual: currentWeightValue,
            unit: getWeightUnit(),
        });
    }

    repsModal.hidden = true;

    continueAfterSet();
    updateTimerUI();
    timerInterval = setInterval(tick, 1000);
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

function rewind10() {
    const addBack = Math.min(10, phaseDuration - phaseTimeRemaining);
    if (addBack > 0) {
        phaseTimeRemaining += addBack;
        totalTimeRemaining += addBack;
    }
    updateTimerUI();
}

function goToPrevExercise() {
    if (currentWorkout.exercises.length <= 1 && currentSetNum === 1 && currentPhase === "set") return;

    // Calculate how much time remains in the current exercise from the current point
    const curEx = currentWorkout.exercises[currentExIndex];
    const curSets = curEx.sets || 1;
    let timeCurrentPhaseLeft = phaseTimeRemaining;

    // Time for remaining sets/rests in current exercise after current position
    let timeRemainingInCurEx = timeCurrentPhaseLeft;
    if (currentPhase === "set") {
        // Add rest for current set + remaining full sets
        timeRemainingInCurEx += curEx.restDuration; // rest after this set
        for (let s = currentSetNum + 1; s <= curSets; s++) {
            timeRemainingInCurEx += curEx.setDuration + curEx.restDuration;
        }
    } else {
        // In rest phase — add remaining full sets
        for (let s = currentSetNum + 1; s <= curSets; s++) {
            timeRemainingInCurEx += curEx.setDuration + curEx.restDuration;
        }
    }

    // Determine previous exercise index
    let prevIdx;
    if (currentSetNum > 1 || currentPhase !== "set" || phaseTimeRemaining < phaseDuration) {
        // Go to start of CURRENT exercise
        prevIdx = currentExIndex;
    } else {
        // Already at the start of current exercise, go to previous
        prevIdx = currentExIndex - 1;
        if (prevIdx < 0) prevIdx = currentWorkout.exercises.length - 1;
    }

    const prevEx = currentWorkout.exercises[prevIdx];
    const prevSets = prevEx.sets || 1;
    const prevExFullTime = prevSets * (prevEx.setDuration + prevEx.restDuration);

    // Update totalTimeRemaining: subtract what was left in current exercise position, add full prev exercise time
    totalTimeRemaining = totalTimeRemaining - timeRemainingInCurEx + prevExFullTime;
    if (totalTimeRemaining < 1) totalTimeRemaining = prevExFullTime;

    // Set state to start of prev exercise
    currentExIndex = prevIdx;
    currentSetNum = 1;
    currentPhase = "set";
    setPhaseTime(prevEx.setDuration);
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
    repsModal.hidden = true;
    saveToHistory();
    const count = currentWorkout.exercises.length;
    $("done-summary").textContent = t("doneSummary")(count);
    renderRepsSummary();
    renderWeightSummary();
    applyI18n();
    showScreen(doneScreen);
}

function renderRepsSummary() {
    const container = $("reps-summary");
    if (repsLog.length === 0) {
        container.innerHTML = "";
        return;
    }
    let html = `<div class="reps-summary-title">${t("repsSummaryTitle")}</div><ul class="reps-summary-list">`;
    repsLog.forEach((entry) => {
        const isFull = entry.repsActual >= entry.repsTarget;
        html += `<li class="reps-summary-item">
            <span class="reps-ex-name">${escapeHtml(entry.exercise)}</span>
            <span class="reps-set-label">${t("setLabel")} ${entry.set}</span>
            <span class="reps-result ${isFull ? "" : "partial"}">${entry.repsActual}/${entry.repsTarget}</span>
        </li>`;
    });
    html += `</ul>`;
    container.innerHTML = html;
}

function renderWeightSummary() {
    const container = $("weight-summary");
    if (weightLog.length === 0) {
        container.innerHTML = "";
        return;
    }
    let html = `<div class="reps-summary-title">${t("weightSummaryTitle")}</div><ul class="reps-summary-list">`;
    weightLog.forEach((entry) => {
        const isFull = entry.weightActual >= entry.weightTarget;
        html += `<li class="reps-summary-item">
            <span class="reps-ex-name">${escapeHtml(entry.exercise)}</span>
            <span class="reps-set-label">${t("setLabel")} ${entry.set}</span>
            <span class="reps-result ${isFull ? "" : "partial"}">${entry.weightActual}/${entry.weightTarget}${entry.unit}</span>
        </li>`;
    });
    html += `</ul>`;
    container.innerHTML = html;
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
/* ═══════════════════════════════════════════
   CALENDAR SCREEN
   ═══════════════════════════════════════════ */
let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth(); // 0-based

function openCalendar() {
    calendarYear = new Date().getFullYear();
    calendarMonth = new Date().getMonth();
    renderCalendar();
    showScreen(calendarScreen);
}

function renderCalendar() {
    // Month/Year header
    const monthNames = t("monthNames");
    $("calendar-month-label").textContent = `${monthNames[calendarMonth]} ${calendarYear}`;

    // Weekday headers
    const weekdays = t("weekdaysShort");
    const weekdayRow = $("calendar-weekdays");
    weekdayRow.innerHTML = weekdays.map(d => `<span class="calendar-weekday">${d}</span>`).join("");

    // Build days grid
    const grid = $("calendar-grid");
    grid.innerHTML = "";

    const firstDay = new Date(calendarYear, calendarMonth, 1);
    const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Monday = 0 adjustment (JS: Sun=0, Mon=1...Sat=6)
    let startDow = firstDay.getDay() - 1;
    if (startDow < 0) startDow = 6;

    // Collect dates that have workouts for fast lookup
    const workoutDates = new Set();
    workoutHistory.forEach(entry => {
        const d = new Date(entry.date);
        if (d.getFullYear() === calendarYear && d.getMonth() === calendarMonth) {
            workoutDates.add(d.getDate());
        }
    });

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === calendarYear && today.getMonth() === calendarMonth;
    const todayDate = today.getDate();

    // Empty cells before first day
    for (let i = 0; i < startDow; i++) {
        const cell = document.createElement("div");
        cell.className = "calendar-day empty";
        grid.appendChild(cell);
    }

    // Day cells
    for (let d = 1; d <= daysInMonth; d++) {
        const cell = document.createElement("div");
        cell.className = "calendar-day";
        cell.textContent = d;

        if (isCurrentMonth && d === todayDate) cell.classList.add("today");
        if (workoutDates.has(d)) {
            cell.classList.add("has-workout");
        }

        cell.addEventListener("click", () => {
            const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            openDayDetail(dateStr);
        });
        grid.appendChild(cell);
    }

    // Hide detail
    $("calendar-detail").innerHTML = "";
}

function prevMonth() {
    calendarMonth--;
    if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
    renderCalendar();
}

function nextMonth() {
    calendarMonth++;
    if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
    renderCalendar();
}

function openDayDetail(dateStr) {
    // Find all entries for this date
    const entries = workoutHistory.filter(e => e.date.startsWith(dateStr));

    if (entries.length === 0) {
        $("calendar-detail").innerHTML = `<p class="empty-msg">${t("noWorkoutsOnDay")}</p>`;
        return;
    }

    let html = "";
    entries.forEach(entry => {
        html += `<div class="history-card glass">`;
        html += `<div class="history-card-header">`;
        html += `<span class="history-card-name">${escapeHtml(entry.workoutName)}</span>`;
        html += `<button class="btn-icon btn-icon-danger history-delete-btn" data-history-id="${entry.id}" title="Delete">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                <path d="M10 11v6"></path><path d="M14 11v6"></path>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
            </svg>
        </button>`;
        html += `</div>`;
        html += `<div class="history-card-meta">`;
        html += `<span>⏱ ${t("duration")}: ${formatTime(entry.durationSeconds)}</span>`;
        const time = new Date(entry.date);
        html += `<span>🕐 ${String(time.getHours()).padStart(2,"0")}:${String(time.getMinutes()).padStart(2,"0")}</span>`;
        html += `</div>`;

        // Exercise list
        html += `<ul class="history-exercise-list">`;
        entry.exercises.forEach((ex, idx) => {
            html += `<li class="history-exercise-item">`;
            html += `<span class="ex-color" style="background:${getColor(idx)}"></span>`;
            html += `<span class="history-ex-name">${escapeHtml(ex.name)}</span>`;
            html += `<span class="history-ex-meta">${ex.sets}× ${t("setLabel")} · ${ex.setDuration}s`;
            if (ex.trackReps) html += ` · ${ex.reps} ${t("reps")}`;
            if (ex.trackWeight) html += ` · ${ex.weight}${getWeightUnit()}`;
            html += `</span></li>`;
        });
        html += `</ul>`;

        // Reps log
        if (entry.repsLog && entry.repsLog.length > 0) {
            html += `<div class="history-reps">`;
            html += `<div class="reps-summary-title">${t("repsSummaryTitle")}</div>`;
            html += `<ul class="reps-summary-list">`;
            entry.repsLog.forEach(r => {
                const isFull = r.repsActual >= r.repsTarget;
                html += `<li class="reps-summary-item">
                    <span class="reps-ex-name">${escapeHtml(r.exercise)}</span>
                    <span class="reps-set-label">${t("setLabel")} ${r.set}</span>
                    <span class="reps-result ${isFull ? "" : "partial"}">${r.repsActual}/${r.repsTarget}</span>
                </li>`;
            });
            html += `</ul></div>`;
        }
        html += `</div>`;
    });

    $("calendar-detail").innerHTML = html;

    // Attach delete listeners
    $("calendar-detail").querySelectorAll(".history-delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const hid = btn.dataset.historyId;
            if (confirm(t("deleteHistoryConfirm"))) {
                workoutHistory = workoutHistory.filter(h => h.id !== hid);
                saveHistory();
                openDayDetail(dateStr);
                renderCalendar();
            }
        });
    });
}

/* ═══════════════════════════════════════════
   SELECTION MODE & EXPORT/IMPORT
   ═══════════════════════════════════════════ */
function enterSelectionMode() {
    selectionMode = true;
    selectedWorkouts.clear();
    renderWorkouts();
}

function exitSelectionMode() {
    selectionMode = false;
    selectedWorkouts.clear();
    renderWorkouts();
}

function toggleSelection(workoutId) {
    if (selectedWorkouts.has(workoutId)) {
        selectedWorkouts.delete(workoutId);
    } else {
        selectedWorkouts.add(workoutId);
    }
    renderWorkouts();
}

function updateSelectionBar() {
    const bar = $("selection-bar");
    if (!bar) return;
    if (selectionMode && selectedWorkouts.size > 0) {
        bar.hidden = false;
        $("selection-count").textContent = selectedWorkouts.size;
    } else {
        bar.hidden = true;
    }
    // Toggle header buttons visibility
    const selectBtn = $("select-btn");
    const cancelSelectBtn = $("cancel-select-btn");
    if (selectBtn) selectBtn.style.display = selectionMode ? "none" : "";
    if (cancelSelectBtn) cancelSelectBtn.style.display = selectionMode ? "" : "none";
}

function exportSelectedWorkouts() {
    if (selectedWorkouts.size === 0) {
        alert(t("noWorkoutsSelected"));
        return;
    }
    const selected = workouts.filter(w => selectedWorkouts.has(w.id));
    // Clean export: remove IDs, just keep workout data
    const exportData = selected.map(w => ({
        name: w.name,
        exercises: w.exercises.map(ex => ({
            name: ex.name,
            sets: ex.sets || 1,
            setDuration: ex.setDuration,
            restDuration: ex.restDuration,
            trackReps: ex.trackReps || false,
            reps: ex.reps || 0,
            trackWeight: ex.trackWeight || false,
            weight: ex.weight || 0,
        })),
    }));

    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `fitness-workouts-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    exitSelectionMode();
}

function triggerImport() {
    $("import-file-input").click();
}

function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const data = JSON.parse(evt.target.result);
            if (!Array.isArray(data)) throw new Error("Not an array");
            showImportPreview(data);
        } catch (_) {
            alert(t("importError"));
        }
    };
    reader.readAsText(file);
    // Reset input so same file can be re-imported
    e.target.value = "";
}

function showImportPreview(data) {
    const importModal = $("import-modal");
    const list = $("import-preview-list");
    list.innerHTML = "";

    data.forEach((w, i) => {
        const isDuplicate = workouts.some(existing => existing.name.toLowerCase() === w.name.toLowerCase());
        const li = document.createElement("li");
        li.className = "import-preview-item";
        li.innerHTML = `
            <span class="import-preview-name">${escapeHtml(w.name)}</span>
            <span class="import-preview-meta">${w.exercises ? w.exercises.length : 0} ${currentLang === "de" ? "Übungen" : "exercises"}${isDuplicate ? ` <span class="import-duplicate">${t("duplicateWarning")}</span>` : ""}</span>
        `;
        list.appendChild(li);
    });

    $("import-modal-title").textContent = t("importPreviewTitle");
    $("import-confirm-btn").textContent = t("importConfirm");
    $("import-cancel-btn").textContent = t("cancel");
    importModal._pendingData = data;
    importModal.hidden = false;
}

function confirmImport() {
    const importModal = $("import-modal");
    const data = importModal._pendingData;
    if (!data) return;

    let count = 0;
    data.forEach(w => {
        if (w.name && Array.isArray(w.exercises)) {
            const newWorkout = {
                id: generateId(),
                name: w.name,
                exercises: w.exercises.map(ex => ({
                    name: ex.name || "",
                    sets: ex.sets || 1,
                    setDuration: ex.setDuration || 30,
                    restDuration: ex.restDuration || 15,
                    trackReps: ex.trackReps || false,
                    reps: ex.reps || 0,
                })),
            };
            workouts.push(newWorkout);
            count++;
        }
    });

    saveWorkouts();
    renderWorkouts();
    importModal.hidden = true;
    importModal._pendingData = null;

    if (count > 0) {
        alert(t("importSuccess")(count));
    }
}

function closeImportModal() {
    const importModal = $("import-modal");
    importModal.hidden = true;
    importModal._pendingData = null;
}

/* ═══════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
    loadWorkouts();
    loadHistory();
    loadLiked();
    loadSettings();
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

    // Home – open calendar
    $("calendar-btn").addEventListener("click", openCalendar);

    // Home – select mode
    $("select-btn").addEventListener("click", enterSelectionMode);
    $("cancel-select-btn").addEventListener("click", exitSelectionMode);

    // Home – import
    $("import-btn").addEventListener("click", triggerImport);
    $("import-file-input").addEventListener("change", handleImportFile);

    // Selection bar – export
    $("export-selected-btn").addEventListener("click", exportSelectedWorkouts);

    // Import modal
    $("import-confirm-btn").addEventListener("click", confirmImport);
    $("import-cancel-btn").addEventListener("click", closeImportModal);
    $("import-modal").addEventListener("click", (e) => {
        if (e.target === $("import-modal")) closeImportModal();
    });

    // Calendar – back to home
    $("calendar-back-btn").addEventListener("click", () => {
        showScreen(homeScreen);
    });

    // Calendar – month navigation
    $("calendar-prev").addEventListener("click", prevMonth);
    $("calendar-next").addEventListener("click", nextMonth);

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

    // Track Reps toggle
    $("ex-track-reps").addEventListener("change", updateRepsFieldVisibility);

    // Track Weight toggle
    $("ex-track-weight").addEventListener("change", updateWeightFieldVisibility);

    // Combined set confirmation dialog
    $("reps-minus").addEventListener("click", () => adjustReps(-1));
    $("reps-plus").addEventListener("click", () => adjustReps(1));
    $("weight-minus").addEventListener("click", () => adjustWeight(-2.5));
    $("weight-plus").addEventListener("click", () => adjustWeight(2.5));
    $("confirm-modal-btn").addEventListener("click", confirmSetDialog);

    // Settings
    $("settings-btn").addEventListener("click", openSettings);
    $("settings-back-btn").addEventListener("click", () => {
        showScreen(homeScreen);
    });
    $("settings-save-btn").addEventListener("click", saveSettingsFromUI);

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
    $("rewind-btn").addEventListener("click", rewind10);
    $("prev-exercise-btn").addEventListener("click", goToPrevExercise);
    $("timer-back-btn").addEventListener("click", goBackFromTimer);

    // Done screen
    $("done-btn").addEventListener("click", () => {
        renderWorkouts();
        showScreen(homeScreen);
    });
});
