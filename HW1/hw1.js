fetch('https://fingerblack.github.io/data.json')
    .then(function (response) {
        return response.json();
    }).then(function (apiJsonData) {
        console.log(apiJsonData["section2"]);
        s2=apiJsonData["section2"];
        ds2 = document.getElementById("s2");
        s2.forEach( sce=>{
            cd=document.createElement("div");
            cd.setAttribute("class","card");
            img=document.createElement("img");
            img.setAttribute("src","img/"+sce["image"]);
            img.setAttribute("class","cd_img")
            heading=document.createElement("div");
            text=document.createElement("div");
            heading.innerText=sce["heading"];
            text.innerText=sce["text"];
            heading.setAttribute("class","cd_heading")
            text.setAttribute("class","cd_text")
            
            cd.appendChild(img);
            cd.appendChild(heading);
            cd.appendChild(text);
            ds2.appendChild(cd);
            }
        )
        img=document.createElement("img");
        img.setAttribute("src","img/lasky.png");
        img.setAttribute("class","intr_img")
        ds3 = document.getElementById("s3");
        ds3.appendChild(img)
        s3=apiJsonData["section3"];
        intr=document.createElement("div");
        intr.setAttribute("class","intr");
        s3["text"].forEach(
            txt=>{
                
                intr.innerText=intr.innerText+txt+'\n'+'\n';
                ds3.appendChild(intr);
            }
            
            );
        //console.log(tex)
        s4=apiJsonData["section4"];
        l1=s4[0]
        l2=s4[1]
        img_1=document.createElement("img");
        img_1.setAttribute("src","img/"+l1["image"]);
        img_1.setAttribute("class","l1_image")
        ds4 = document.getElementById("s4");
        ds4.appendChild(img_1);
        dl1=document.createElement("div")
        dl1.setAttribute("class","l1_heading")
        dl2=document.createElement("div")
        dl2.setAttribute("class","li_text")
        dl1.innerText=l1["heading"]
        dl2.innerText=l1["text"]
        ds4.appendChild(dl1);
        ds4.appendChild(dl2);

        img_2=document.createElement("img");
        img_2.setAttribute("src","img/"+l2["image"]);
        img_2.setAttribute("class","l2_image")
        ds4.appendChild(img_2);
        dl21=document.createElement("div")
        dl21.setAttribute("class","l2_heading")
        dl22=document.createElement("div")
        dl22.setAttribute("class","li_text")
        dl21.innerText=l2["heading"]
        dl22.innerText=l2["text"]
        ds4.appendChild(dl21);
        ds4.appendChild(dl22); 
    })

