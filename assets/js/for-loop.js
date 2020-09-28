// SCRIPT THAT PERFORMS CRUD ON BROWSER MEMORY(LOCAL STORAGE)

let checkDB = JSON.parse(localStorage.getItem("collegeDatabase")) // try and get values from storage
if (checkDB == null){ // checks if the database does not exist
  checkDB = [] // create an empty
}
function viewRecord()
{ // list of all students in the checkDB (array)
  var tempRecord = "";
  for(i=0; i < checkDB.length; i++)
  {
    tempRecord +=
    `
      <div class="profile" id="${i}">
        <div class="student_details ${checkDB[i].name}profile">
          <img src='${checkDB[i].img}' alt="${checkDB[i].name}">
        </div>
        <div class="student_details ${checkDB[i].name}profile">
          <strong>Admission Status</strong>: <span>${checkDB[i].admissionStatus}</span>
        </div>
        <div class="student_details ${checkDB[i].name}profile">
          <strong>Name</strong>: <span>${checkDB[i].name}</span>
        </div>
        <div class="student_details ${checkDB[i].name}profile">
          <strong>Department</strong>: <span>${checkDB[i].department}</span>
        </div>
        <div class="student_details ${checkDB[i].name}profile">
          <strong>Grade Point</strong>: <span>${checkDB[i].gradePoint}</span>
        </div>
        <div class="btn">
          <button class="del-btn" onClick="removeStudent(${i})">Rusticate</button>
          <button class="edit-btn" onClick="updateStudentRecord(${i})">Edit Record</button>
        </div>
      </div>
    `  
  };
  document.getElementById("students").innerHTML = tempRecord;
};

viewRecord(); // revoke function listOfStudent

/* 

  >>>> Add new student after admission <<<<

*/

function newStudentEntry()
{
  // binding values from form to variable for validation 
  fullname = document.getElementById("fullname").value;
  department = document.getElementById("department").value;
  gradePoint = document.getElementById("gradepoint").value;

 
  if (!name && !department && !gradePoint){  // empty form validation control 
    alert("can't be empty")
  }
  else 
  {
    let newRecord =
    { // binding values to array object keys
      "name" : fullname,
      "department" : department,  
      "gradePoint" : gradePoint,
      "img" : "assets/img/4.jpg",
      "admissionStatus" : "Admitted"
    }
    checkDB.push(newRecord);
    localStorage.setItem("collegeDatabase", JSON.stringify(checkDB))
    viewRecord();
}

  }
  
/* 
  >>>> Function to delete student record <<<<
*/
let removeStudent = (studentId) =>
{
  dangerZone = confirm(`
  Are you sure you want to delete ${checkDB[studentId].name}'s record?
  Warning: this action is irreversible.`)
  if (dangerZone == true)
  {
    checkDB.splice(studentId, 1); // locate and delete the pass id
    localStorage.setItem("collegeDatabase", JSON.stringify(checkDB))
  }

  viewRecord() // show updated student database
  
}

/* 
  Function to Edit student entry
*/

let updateStudentRecord = (studentId) =>
{
  recordToUpdate = checkDB[studentId]
  document.getElementById("fullname").value = recordToUpdate.name 
  document.getElementById("department").value = recordToUpdate.department
  document.getElementById("gradepoint").value = recordToUpdate.gradePoint
  document.getElementById("mark").value = studentId


}

let updatedRecord = () =>
{
  studentId = document.getElementById("mark").value;
  updatedRecord = {

    "name" : document.getElementById("fullname").value,
    "department" : document.getElementById("department").value,
    "gradePoint" : document.getElementById("gradepoint").value,
    "img" : "assets/img/4.jpg",
  }
  checkDB[studentId] = updatedRecord
  localStorage.setItem("collegeDatabase", JSON.stringify(checkDB))
  viewRecord();
  
}


/* 

  Search function

*/

let searchRecord = () => {

  lookFor = document.getElementById("search").value;
  checkDB = checkDB.filter(x=> x.name == lookFor;
  if (checkDB.length <= 1){
    
    document.getElementById("searchResult").innerHTML = checkDB.length + " Record Found"
    viewRecord()

  }
  else{

    document.getElementById("searchResult").innerHTML = checkDB.length + " Records Found"
    viewRecord()
    
  }
}



