import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyBRNHN4-796R_PV72zvE9n8FfNtQPIZfRM",
  authDomain: "lab-website-4a6be.firebaseapp.com",
  databaseURL: "https://lab-website-4a6be-default-rtdb.firebaseio.com",
  projectId: "lab-website-4a6be",
  storageBucket: "lab-website-4a6be.appspot.com",
  messagingSenderId: "470033430724",
  appId: "1:470033430724:web:63c7d900da0a6730197191"
};

const app = initializeApp(firebaseConfig);


const db = getDatabase();

function submitData() {
  const title = getElementsByID('title').value;
  const author = getElementsByID('author').value;
  const genre = getElementsByID('genre').value;
  const statusOption = getElementsByID('status').value;
  const status = statusOption.value;
  const accession = getElementsByID('accession').value;
}


const AddBook = document.getElementsByClassName('button')

AddBook.addEventListener("click", function (event) {
  event.AddBook();
  event.WriteBookData(title.value, author.value, genre.value, status.value , accession.value);
})


function WriteBookData(title, author, genre, status, accession) {
  set(ref(db, 'books/' + accession), {
    title: title,
    author: author,
    genre: genre,
    status: genre,
  })

}
