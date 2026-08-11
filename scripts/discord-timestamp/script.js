const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const styleInput = document.getElementById("styleInput");
const output = document.getElementById("output");
const unixOutput = document.getElementById("unixOutput");
const previewOutput = document.getElementById("previewOutput");
const timezoneLabel = document.getElementById("timezoneLabel");
const copyButton = document.getElementById("copyButton");
const toast = document.getElementById("toast");

const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timezoneLabel.textContent = detectedTimezone || "Local browser timezone";

function pad(value) {
  return String(value).padStart(2, "0");
}

function toDateInputValue(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function toTimeInputValue(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function setDefaults() {
  const now = new Date();
  now.setSeconds(0, 0);
  dateInput.value = toDateInputValue(now);
  timeInput.value = toTimeInputValue(now);
}

function getSelectedDate() {
  if (!dateInput.value || !timeInput.value) return null;

  const [year, month, day] = dateInput.value.split("-").map(Number);
  const [hour, minute] = timeInput.value.split(":").map(Number);

  // Creating the Date with numeric components makes the browser interpret it
  // in the user's local timezone, including daylight-saving rules.
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function updateTimestamp() {
  const date = getSelectedDate();

  if (!date || Number.isNaN(date.getTime())) {
    output.textContent = "Choose a valid date and time";
    unixOutput.textContent = "—";
    previewOutput.textContent = "—";
    return;
  }

  const unix = Math.floor(date.getTime() / 1000);
  const style = styleInput.value;

  output.textContent = `<t:${unix}:${style}>`;
  unixOutput.textContent = unix.toString();

  previewOutput.textContent = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function showToast() {
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 1300);
}

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(output.textContent);
    showToast();
  } catch {
    const range = document.createRange();
    range.selectNode(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

document.querySelectorAll("[data-time]").forEach(button => {
  button.addEventListener("click", () => {
    timeInput.value = button.dataset.time;
    updateTimestamp();
  });
});

document.querySelectorAll("[data-offset]").forEach(button => {
  button.addEventListener("click", () => {
    const date = new Date();
    if (button.dataset.offset === "tomorrow") {
      date.setDate(date.getDate() + 1);
    }
    dateInput.value = toDateInputValue(date);
    updateTimestamp();
  });
});

[dateInput, timeInput, styleInput].forEach(element => {
  element.addEventListener("input", updateTimestamp);
  element.addEventListener("change", updateTimestamp);
});

setDefaults();
updateTimestamp();
