// 1. Create a signup form and display form data in your web
// page on submission.


// let myform = document.getElementById('signupform');
//         let dataContainer = document.getElementById('userData');

//         myform.addEventListener("submit", function(event) {
//             // Page ko refresh hone se rokna (Sab se zaroori line)
//             event.preventDefault();

//             // Inputs se data lena
//             let nameValue = document.getElementById('username').value;
//             let emailValue = document.getElementById('useremail').value;

//             // Niche wale div mein data show karwana
//             // innerHTML ke zariye hum page ke upar naya content likh sakte hain
//             dataContainer.innerHTML = `
//                 <p><b>User Name:</b> ${nameValue}</p>
//                 <p><b>User Email:</b> ${emailValue}</p>
//                 <p style="color: green;">Data successfully niche show ho gaya hai!</p>
//             `;

//             // Agar aap chahti hain ke submit ke baad fields khali ho jayein:
//             myform.reset(); 
//         });


// /////////////////////////////////////////

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function caption() {
//     let extraText=document.getElementById("extraText");
//     let btn=document.getElementById("readMoreBtn");

//     if(extraText.style.display==="none"|| extraText.style.display === ""){
//         extraText.style.display="inline";
//         btn.innerText="readless";
//     }
//     else{
//         extraText.style.display="none"
//         btn.innerText="readmore";
//     }
// } 

// //////////////////////////////////////////

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


        const form = document.getElementById("studentForm");
        const tableBody = document.getElementById("studentTableBody");
        let selectedRow = null;

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("stdName").value;
            let age = document.getElementById("stdAge").value;
            
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>
                    <button onclick="editRow(this)">Edit</button>
                    <button onclick="deleteRow(this)">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
            form.reset();
        });

        function deleteRow(btn) {
            let row = btn.parentNode.parentNode;
            row.remove();
        }

        function editRow(btn) {
            document.getElementById("editFormContainer").style.display = "block";
            selectedRow = btn.parentNode.parentNode;
            
            let oldName = selectedRow.cells[0].innerText;
            let oldAge = selectedRow.cells[1].innerText;

            document.getElementById("editName").value = oldName;
            document.getElementById("editAge").value = oldAge;
        }

        function updateRow() {
            let newName = document.getElementById("editName").value;
            let newAge = document.getElementById("editAge").value;

            selectedRow.cells[0].innerText = newName;
            selectedRow.cells[1].innerText = newAge;

            document.getElementById("editFormContainer").style.display = "none";
        }
   