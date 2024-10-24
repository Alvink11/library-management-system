import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js"

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

 

  var stdno = 0;
  var tbody = document.getElementById(tbody)

  function AddItemToTable(author,title,accession,genre,tenure){
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

//         td1.innerHTML=++stdno;
//         td2.innerHTML=author;
//         td3.innerHTML=title;
//         td4.innerHTML=accession;
//         td5.innerHTML=genre;
//         td6.innerHTML=tenure;

//         trow.appendChild(td1);
//         trow.appendChild(td2);
//         trow.appendChild(td3);
//         trow.appendChild(td4);
//         trow.appendChild(td5);
//         trow.appendChild(td6);

//         tbody.appendChild(trow);

  }

//  function AddAllItemsToTable(TheStudent){
//     stdno=0;
//     tbody.innerHTML="";
//     TheStudent.forEach(elament => {
//         AddItemToTable(Element.stdNo, Element.author, Element.title,Element.accession,Element.genre,Element.tenure);
//     });
//   }



//  function GetAllDataOnce(){
//     const dbRef = ref(db);

//     get(child(dbRef, 'IssuedBookDetail')).then((snapshot)=> {
//       var student = [];

//       snapshot.forEach(childSnapshot => {
//             student.push(childSnapshot.val());
//       });
//       AddAllItemsToTable(student);
//     })
//   }

//   window.onload = GetAllDataOnce;