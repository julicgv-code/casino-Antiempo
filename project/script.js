const simbolos = [
    { icon: "🍒", peso: 40 },
    { icon: "🍋", peso: 30 },
    { icon: "🍊", peso: 20 },
    { icon: "⭐", peso: 7 },
    { icon: "💎", peso: 3 }
];

let creditos = 100;
let saldoInicial = 100;
let apuesta = 1;
let girando = false;

let totalGanado = 0;
let totalPerdido = 0;

const FILAS = 3;
const COLUMNAS = 4;

const grid = document.getElementById("grid");

// RANDOM
function randomSimbolo() {
    let total = simbolos.reduce((sum, s) => sum + s.peso, 0);
    let r = Math.random() * total;

    for (let s of simbolos) {
        if (r < s.peso) return s.icon;
        r -= s.peso;
    }
}

// GRID
function crearGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < FILAS * COLUMNAS; i++) {
        let d = document.createElement("div");
        d.className = "slot";
        d.innerText = randomSimbolo();
        grid.appendChild(d);
    }
}

function setApuesta(v) {
    apuesta = v;
}

// GIRAR
function girar() {
    if (girando) return;
    if (creditos < apuesta) return alert("Sin saldo");

    girando = true;
    creditos -= apuesta;
    actualizarUI();

    let spinSound = new Audio("sounds/spin.mp3");
    spinSound.currentTime = 0;
    spinSound.play().catch(()=>{});

    const slots = document.querySelectorAll(".slot");

    slots.forEach(s => s.classList.remove("ganador"));
    slots.forEach(s => s.classList.add("girando"));

    let columnas = [];

    for (let c = 0; c < COLUMNAS; c++) {
        let col = [];
        for (let f = 0; f < FILAS; f++) {
            col.push(slots[f * COLUMNAS + c]);
        }
        columnas.push(col);
    }

    let tiempos = [4000, 5000, 6000, 7000];
    let terminadas = 0;

    columnas.forEach((col, index) => {

        let intervalo = setInterval(() => {
            col.forEach(s => s.innerText = randomSimbolo());
        }, 100);

        setTimeout(() => {
            clearInterval(intervalo);

            col.forEach(s => {
                s.innerText = randomSimbolo();
                s.classList.remove("girando");
            });

            terminadas++;

            if (terminadas === COLUMNAS) {
                verificarResultado();
                girando = false;
            }

        }, tiempos[index]);
    });
}

// RESULTADO
function verificarResultado() {
    const slots = document.querySelectorAll(".slot");

    let matriz = [];

    for (let i = 0; i < FILAS; i++) {
        matriz[i] = [];
        for (let j = 0; j < COLUMNAS; j++) {
            matriz[i][j] = slots[i * COLUMNAS + j];
        }
    }

    let premio = 0;

    matriz.forEach(fila => {
        let v = fila.map(x => x.innerText);

        if (v.every(x => x === v[0])) {
            premio += apuesta * 5;
            fila.forEach(x => x.classList.add("ganador"));
        }

        for (let i = 0; i < v.length - 2; i++) {
            if (v[i] === v[i+1] && v[i] === v[i+2]) {
                premio += apuesta * 2;
                fila[i].classList.add("ganador");
                fila[i+1].classList.add("ganador");
                fila[i+2].classList.add("ganador");
            }
        }
    });

    let diagonales = [
        [matriz[0][0], matriz[1][1], matriz[2][2]],
        [matriz[0][3], matriz[1][2], matriz[2][1]],
        [matriz[0][1], matriz[1][2], matriz[2][3]],
        [matriz[0][2], matriz[1][1], matriz[2][0]]
    ];

    diagonales.forEach(diag => {
        let v = diag.map(x => x.innerText);

        if (v[0] === v[1] && v[1] === v[2]) {
            premio += apuesta * 3;
            diag.forEach(x => x.classList.add("ganador"));
        }
    });

    let mensaje = document.getElementById("mensaje");

    if (premio > 0) {
        creditos += premio;
        totalGanado += premio;

        let winSound = new Audio("sounds/win.mp3");
        winSound.currentTime = 0;
        winSound.play().catch(()=>{});

        mensaje.innerText = "🔥 GANASTE $" + premio;
        mensaje.style.color = "lime";

    } else {
        totalPerdido += apuesta;

        mensaje.innerText = "❌ PERDISTE $" + apuesta;
        mensaje.style.color = "red";
    }

    actualizarUI();
}

// UI
function actualizarUI() {
    const saldo = document.querySelector(".saldo");

    document.getElementById("creditos").innerText = creditos;
    document.getElementById("totalGanado").innerText = totalGanado;
    document.getElementById("totalPerdido").innerText = totalPerdido;
    document.getElementById("gananciaTotal").innerText = creditos - saldoInicial;
    document.getElementById("nombreStats").innerText = inputNombre.value || "Jugador";

    saldo.classList.add("animar");
    setTimeout(() => saldo.classList.remove("animar"), 500);
}

// RETIRAR
function retirar() {
    alert(
        "🏦 RETIRO\n\n" +
        "Jugador: " + (inputNombre.value || "Jugador") + "\n" +
        "Saldo: $" + creditos + "\n" +
        "Ganancia real: $" + (creditos - saldoInicial)
    );

    creditos = 100;
    saldoInicial = 100;
    totalGanado = 0;
    totalPerdido = 0;

    actualizarUI();
}

// NOMBRE
const inputNombre = document.getElementById("inputNombre");

if (localStorage.getItem("nombre")) {
    inputNombre.value = localStorage.getItem("nombre");
}

inputNombre.addEventListener("input", () => {
    localStorage.setItem("nombre", inputNombre.value);
});

crearGrid();
