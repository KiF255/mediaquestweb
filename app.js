function login(){
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    if(email==="user@mediaquest.com" && pass==="12345"){
        window.location.href="catalog.html";
    }else{
        document.getElementById("error-msg").innerText="Invalid credentials";
    }
}

const catalog=[
    {title:"Cyber Legends", img:"https://i.imgur.com/U7O5MTC.jpg"},
    {title:"The Last Galaxy", img:"https://i.imgur.com/FzEMhCM.jpg"},
    {title:"Demon Quest", img:"https://i.imgur.com/p2slj1v.jpg"},
    {title:"Pixel Heroes", img:"https://i.imgur.com/yJtV49H.jpg"}
];

if(window.location.pathname.includes("catalog.html")){
    const container=document.getElementById("catalog-container");
    catalog.forEach(item=>{
        container.innerHTML+=`
        <div class="card">
            <img src="${item.img}">
            <h4>${item.title}</h4>
        </div>`;
    });
}
