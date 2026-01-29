
let body = document.body
let gomb = document.getElementById("gombpuca");


body.style.backgroundColor = "rgb(219, 219, 219)";



let id = 0


gomb.addEventListener("click", function(){
    let cim = document.getElementById("cim").value;
    let dropdown = document.getElementById("dropdown").value;
    let url = document.getElementById("url").value;
    
    if (dropdown == ""){
        alert("Kérem válasszon műfajt.")
        return
    }
    if (cim == ""){
        alert("Kérem adjon meg címet.")
        return
    }
    if (url == ""){
        alert("Kérem adjon meg kép urlt.")
        return
    }


    let prevSection = document.getElementById((id - 1).toString());
    if(prevSection == null || prevSection.childNodes.length == 4){
        let section = document.createElement("section")
        section.className = "row"
        section.id = id
        id++;



        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        let img = document.createElement("img")
        let torles = document.createElement("input")
        torles.type = "button"
        torles.value = "Törlés"
        torles.className = "btn btn-danger m-2"
        
        torles.addEventListener("click", function(){
            section.removeChild(div)
        })

        h1.innerText = cim
        p.innerText = dropdown
        img.src = url

        div.append(h1)
        div.append(p)
        div.append(img)
        div.append(torles)
        div.className = "card mt-5 col-md-6 col-sm-12 mx-auto"

        section.append(div)
        
        body.append(section)
 

   
    } else{
        let sectionElem = document.getElementById((id - 1).toString());
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        let p = document.createElement("p")
        let img = document.createElement("img")
        let torles = document.createElement("input")
        torles.type = "button"
        torles.value = "Törlés"
        torles.className = "btn btn-danger m-2"

        torles.addEventListener("click", function(){
            sectionElem.removeChild(div)
        })


        h1.innerText = cim
        p.innerText = dropdown
        img.src = url

        div.append(h1)
        div.append(p)
        div.append(img)
        div.append(torles)

        div.className = "card mt-5 col-md-6 col-sm-12 mx-auto"

        sectionElem.append(div)
        
        body.append(sectionElem)

    }
    
})









//body.append(div)