// Summary:
// This code is written in JavaScript and it handles a rating system. It allows the user to select a rating by clicking on a note, and then displays the selected rating in a result section.

"use strict";

const container = document.querySelector(".rating");
const result = document.querySelector(".result");
let selectedNote = null;
let notes = document.querySelectorAll(".section__note");

for (let i = 0; i < notes.length; i++) {
  notes[i].addEventListener("click", function () {
    for (let j = 0; j < notes.length; j++) {
      notes[j].style.backgroundColor = "";
    }

    selectedNote = notes[i].getAttribute("data-note");
    notes[i].style.backgroundColor = "#FC7614";
  });
}

document.getElementById("submitBtn").addEventListener("click", function () {
  if (selectedNote) {
    container.classList.add("hidden");
    result.classList.remove("hidden");
    document.getElementById(
      "result"
    ).textContent = `You selected ${selectedNote} out of 5`;
  } else {
    document.getElementById("result").textContent = "";
  }
});
