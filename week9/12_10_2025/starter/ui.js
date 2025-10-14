// Lesson 3 - Events Starter

let quotes = []
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from "./quote.js"

// Select DOM elements
const quoteList = document.querySelector("#quote-list")
const form = document.querySelector("#quoteForm")
const contentInput = document.querySelector("#content")
const authorInput = document.querySelector("#author")
const idInput = document.querySelector("#quoteId")
const randomBtn = document.querySelector("#randomBtn")
const randomDisplay = document.querySelector("#randomQuoteDisplay")

function createQuoteElement(quote) {
  const quoteDiv = document.createElement("div");
  quoteDiv.dataset.id = quote.id;
  const quoteText = document.createElement("p");
  quoteText.textContent = quote.content;
  const authorText = document.createElement("p");
  authorText.textContent = `— ${quote.author}`;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id

  quoteDiv.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains("edit-btn")) {
      const quoteToEdit = getAllQuotes().find((q) => q.id == id);
      if (quoteToEdit){
        idInput.value = quoteToEdit.id
        contentInput.value = quoteToEdit.content
        authorInput.value = quoteToEdit.author
      }
    }
    if (e.target.classList.contains("delete-btn")) {
      deleteQuote(Number(id))
      deleteQuoteFromDOM(Number(id))
    }
  });

    quoteDiv.append(quoteText, authorText, editBtn, deleteBtn)
  return quoteDiv
  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote)
  quoteList.appendChild(quoteElement)
}

function updateQuoteInDOM(quote) {
  const quoteDiv = quoteList.querySelector(`[data-id="${quote.id}"]`)
  if (quoteDiv) {
    const pTags = quoteDiv.querySelectorAll("p");
    pTags[0].textContent = quote.content;
    pTags[1].textContent = `— ${quote.author}`
  }
}

function deleteQuoteFromDOM(id) {
  const quoteDiv = quoteList.querySelector(`[data-id="${id}"]`)
  if (quoteDiv) quoteDiv.remove();
  }

function renderQuotes() {
  quoteList.innerHTML = ""
  const allQuotes = getAllQuotes()
  allQuotes.forEach((q) => {
    const quoteElement = createQuoteElement(q)
    quoteList.appendChild(quoteElement)
  })
}

function showRandomQuote() {
  const allQuotes = getAllQuotes();
  if (allQuotes.length === 0) {
    randomDisplay.textContent = "No quotes yet!";
    return;
  }
  const random = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  randomDisplay.textContent = `"${random.content}" - ${random.author}`
}

// Event listeners for form submission, edit, and delete clicks

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = Number(idInput.value);
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();

  if (!content || !author) {
    alert("Please enter both quote and author!")
    return;
  }

  if(id){
    const update = updateQuote(id,content, author);
    if (update) updateQuoteInDOM(update);
  } else {
    const newQuote = addQuote(content, author);
    addQuoteToDOM(newQuote)
  }

  idInput.value = ""
  contentInput.value = ""
  authorInput.value = ""
});

randomBtn.addEventListener("click",showRandomQuote)

renderQuotes();