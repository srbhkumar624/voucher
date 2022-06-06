let wallet=JSON.parse(localStorage.getItem("user"));
wallet.forEach(function(el){
    let amount=(document.getElementById("wallet_balance"))
    amount.innerText=+el.amount;

})
const url="https://masai-vouchers-api.herokuapp.com/api/vouchers";
fetch(url)
.then(function(res){
   return res.json();
})
.then(function(res){
    let data=res[0].vouchers
    console.log(data);
    append(data);
    
})
.catch(function(err){
    console.log("err",err);
})
let arr= JSON.parse(localStorage.getItem("purchase"))||[];
function append(data){
    data.forEach(function(el){
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=el.image;
        let n=document.createElement("p");
        n.innerText=el.name;
        let p=document.createElement("p");
        p.innerText=+(el.price);
        let button=document.createElement("button");
        button.innerText="Buy"
        button.setAttribute("class","buy_voucher");
        box.append(image,n,p,button);
        document.getElementById("voucher_list").append(box);
        button.addEventListener("click",function(){
            buyVoucher(el);
        })
    })
}
function buyVoucher(el){

    arr.push(el);
    localStorage.setItem("purchase",JSON.stringify(arr));

}
