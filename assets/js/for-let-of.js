/*
    
    FOR (LET OF) METHOD
      - readable
      - goes through all element

  */

// check time
console.time("for_letOf");

let clients = [
  {
    "companyName": "Ksolution",
    "companyEmail": "K@solution.com",
    "companyLogo":  "/assets/img/company_1.jpg",
  },
  {
    "companyName": "WhatsApp",
    "companyEmail": "whatsapp@gmail.com",
    "companyLogo":  "/assets/img/company_2.jpg",
  },
  {
    "companyName": "Zoom",
    "companyEmail": "tiktok@yahoo.com",
    "companyLogo":  "/assets/img/company_3.png",
  }
]
for( let company_info of clients){
  clients += `<div>
  <img src="${company_info.companyLogo}" alt="${company_info.companyName} Image"> <br>
  <strong>Company Name</strong> : ${company_info.companyName} <br>
  <strong>Company Email</strong> : ${company_info.companyEmail} <br>
  </div><hr>` 
}
document.getElementById("clients").innerHTML = clients;

// time speed
console.timeEnd("for_letOf");
