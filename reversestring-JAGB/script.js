const input = document.getElementById("inputText");
const button = document.getElementById("invertButton");
const result = document.getElementById("resultText");
const historyList = document.getElementById("historyList");
const autoMode = document.getElementById("autoMode");

let history = [];

/** Invierte correctamente una cadena Unicode (incluye emojis) */
function reverseUnicode(str) {
  return Array.from(str).reverse().join("");
}

/** Muestra el resultado */
function showResult(text) {
  result.textContent = text || "---";
}

/** Inversión manual (botón) */
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return alert("Escribe algo para invertir.");
  const inverted = reverseUnicode(text);
  showResult(inverted);
});

/** Modo automático */
input.addEventListener("input", () => {
  if (autoMode.checked) {
    const text = input.value;
    const inverted = reverseUnicode(text);
    showResult(inverted);
  }
});

/** Actualiza el historial visual */
function updateHistory() {
  historyList.innerHTML = "";
  history.forEach((item, index) => {
    const li = document.createElement("li");

    const content = document.createElement("div");
    content.textContent = `"${item.original}" → "${item.inverted}"`;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copiar";
    copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(item.inverted);
      alert(`Copiado: ${item.inverted}`);
    });

    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "↩️ Recargar";
    reloadBtn.addEventListener("click", () => {
      input.value = item.original;
      if (autoMode.checked) showResult(reverseUnicode(item.original));
    });

    buttonsDiv.append(copyBtn, reloadBtn);
    li.append(content, buttonsDiv);
    historyList.appendChild(li);
  });
}

/** Solo guarda en historial al presionar “Copiar” */
button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  const inverted = reverseUnicode(text);
  showResult(inverted);

  // Añade al historial solo si no existe duplicado exacto
  if (!history.find(h => h.original === text && h.inverted === inverted)) {
    history.unshift({ original: text, inverted });
    updateHistory();
  }
});
