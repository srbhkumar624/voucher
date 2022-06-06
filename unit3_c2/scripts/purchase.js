let purchase_arr=JSON.parse(localStorage.getItem("purchase"));
purchase_arr.forEach(function(el){
    let box=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let n=document.createElement("p");
    n.innerText=el.name;
    let p=document.createElement("p");
    p.innerText=+(el.price);
    box.append(image,n,p);
    document.getElementById("purchased_vouchers").append(box);
})



