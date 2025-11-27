
function login(){
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    if(email==="user@mediaquest.com" && pass==="12345"){
        localStorage.setItem("auth", "true");
        window.location.href="catalog.html";
    }else{
        document.getElementById("error-msg").innerText="Invalid credentials";
    }
}

function logout(){
    localStorage.removeItem("auth");
    window.location.href="index.html";
}

if(window.location.pathname.includes("catalog.html")){
    if(localStorage.getItem("auth")!=="true"){
        window.location.href="index.html";
    }

    const catalog=[
        {title:"Cyber Legends", img:"https://i.imgur.com/U7O5MTC.jpg"},
        {title:"The Last Galaxy", img:"https://i.imgur.com/FzEMhCM.jpg"},
        {title:"Demon Quest", img:"https://i.imgur.com/p2slj1v.jpg"},
        {title:"Pixel Heroes", img:"https://i.imgur.com/yJtV49H.jpg"},
        {title:"Night Escape", img:"https://i.imgur.com/Z8e4d21.jpeg"},
        {title:"Quantum Drift", img:"https://i.imgur.com/n4W1VRC.jpeg"}
    ];

    const container=document.getElementById("catalog-container");

    function render(list){
        container.innerHTML="";
        list.forEach(item=>{
            container.innerHTML+=`
            <div class="card">
                <img src="${item.img}">
                <h4>${item.title}</h4>
            </div>`;
        });
    }

    render(catalog);

    window.filterCatalog=function(){
        const q=document.getElementById("search").value.toLowerCase();
        const filtered=catalog.filter(item=>item.title.toLowerCase().includes(q));
        render(filtered);
    }
}
