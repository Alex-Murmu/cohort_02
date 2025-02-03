

function get(){

    const divshow = document.getElementById('main2');


    fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json()).then((data)=>{
    data.forEach(element => {
        const div = document.createElement('div');
        div.style.margin = '5px'
        div.style.width = '400px'
        div.style.textAlign ="center"
        div.style.borderRadius = '20px';
        div.style.background = "rgb(185, 166, 203)"
        div.style.color ="black";
        div.style.boxShadow = "10px 20px 35px 0.2px black"
        div.innerHTML = `<h1>${element.name}</h1>
                         <p> ID : ${element.id}<p>
                         <p>username : ${element.username}</p>
                         <p>email : ${element.email}</p> 
                         <h3>Aaddress </h3>         
                         <p>address : ${element.address.street}</p>          
                         <p>suite : ${element.address.suite}</p>          
                         <p>city : ${element.address.city}</p>          
                         <p>zipcode : ${element.address.zipcode}</p>          
                         <p>geo : ${element.address.geo}</p>          
                         <p>phone : ${element.phone}</p> 
                         <h3>Comppany</h3>         
                         <p>website : ${element.company.website}</p>          
                         <p>name : ${element.company.name}</p>          
                         <p>catchPhrase : ${element.company.catchPhrase}</p>          
                         <p>bs : ${element.company.bs}</p>          
               `;
     divshow.appendChild(div)
    });
})
}