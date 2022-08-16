async function load() {
    const response = await fetch("http://localhost:3000/courses")

    const courses = await response.json()
    return courses;
}

document.addEventListener("DOMContentLoaded",async ()=> {
    let courses = [];

    try{
        courses = await load();
    }catch(e)
    {
        console.log(e);
    }
    container = document.getElementById("cont");
    
    for(let i=0;i<courses.length;i++)
    {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let h4 = document.createElement("h4");
        let img = document.createElement("img");
        div.setAttribute("id",courses[i]["id"]);
        h4.textContent = courses[i]["title"];
        p.textContent = courses[i]["author"];
        img.setAttribute("src",courses[i]["image"]);
        div.classList.add('flexbox-item');
        img.classList.add("img-style");
        div.append(img);
        div.append(h4);
        div.append(p);
        container.append(div);
   
    }
    search = document.getElementById("search");
    button = document.getElementById("butt");

    button.addEventListener("click" , ()=>{
            console.log("sadjhsa");
            let val = search.value.toLowerCase();
            for(let i=1;i<=courses.length;i++)
            {
                str = i.toString()
                let div = document.getElementById(str);
                let h4 = div.getElementsByTagName("h4")[0].textContent.toLowerCase();
                if(h4.search(val)!==-1 && val!=='')
                {
                    div.classList.add("hide");
                }   
                else
                {
                    div.classList.remove("hide");
                }
            }
    });

});

    