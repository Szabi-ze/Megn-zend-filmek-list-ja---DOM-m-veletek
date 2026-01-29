
let body = document.body

let cim = document.getElementById("cim").value;
let dropdown = document.getElementById("dropdown").value;
let url = document.getElementById("url").value;
let gomb = document.getElementById("gombpuca");

let div = document.createElement("div")





let id = 0
let darab = 5

gomb.addEventListener("click", function(){
    if(darab > 3){
        let section = document.createElement("section")
        section.className = "row"
        section.id = id
        body.append(section)

        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        let img = document

        h1.innerText = cim
        p.innerText = url

        alert("sigma")
    }
    
})





div.className = "card"



//body.append(div)