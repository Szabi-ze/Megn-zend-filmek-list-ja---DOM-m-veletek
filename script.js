
let body = document.body
let gomb = document.getElementById("gombpuca");






let id = 0
let darab = 5

gomb.addEventListener("click", function(){
    if(darab > 3){
        let section = document.createElement("section")
        section.className = "row"
        section.id = id

        let cim = document.getElementById("cim").value;
        let dropdown = document.getElementById("dropdown").value;
        let url = document.getElementById("url").value;
        


        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        let img = document.createElement("img")

        h1.innerText = cim
        p.innerText = dropdown
        img.src = url

        div.append(h1)
        div.append(p)
        div.append(img)

        div.className = "card"

        section.append(div)
        
        body.append(section)
        alert("sigma")
    }
    
})









//body.append(div)