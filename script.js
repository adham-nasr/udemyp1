async function load(str) {
    const response = await fetch("http://localhost:3000/"+str)
    const courses = await response.json();
    car1 = document.getElementById("car1");
    car2 = document.getElementById("car2");
    car1.innerHTML="";
    car2.innerHTML="";

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
        div.classList.add('my_flexbox-item');
        img.classList.add("my_img-style");
        div.append(img);
        div.append(h4);
        div.append(p);
        if(i<3)
            car1.append(div);
        else
            car2.append(div);
   
    }
    return courses;
    
}

document.addEventListener("DOMContentLoaded",async ()=> {
    let courses = [];
    try{
        courses = await load("python");
    }catch(e)
    {
        console.log(e);
    }
    /*
    car1 = document.getElementById("car1");
    car2 = document.getElementById("car2");
    
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
        div.classList.add('my_flexbox-item');
        img.classList.add("my_img-style");
        div.append(img);
        div.append(h4);
        div.append(p);
        if(i<3)
            car1.append(div);
        else
            car2.append(div);
   
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
                    div.classList.add("my_hide");
                }   
                else
                {
                    div.classList.remove("my_hide");
                }
            }
    });
    */
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
                    div.classList.add("my_hide");
                }   
                else
                {
                    div.classList.remove("my_hide");
                }
            }
    });

    let arr = document.getElementsByClassName("nav-link");
    for(let i=0;i<arr.length;i++)
    {
        arr[i].addEventListener('click',async (event)=>{
            event.preventDefault();

            await load(arr[i].id);
        })
    }

});
