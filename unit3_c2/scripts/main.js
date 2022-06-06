let arr=JSON.parse(localStorage.getItem("user"))||[];
function signup(n,e,a,am){
    this.name=n
    this.email=e
    this.address=a
    this.amount=am

}
function Submit(){
    event.preventDefault();
    let form=document.getElementById("signup");
    let name=form.name.value;
    let email=form.email.value;
    let address= form.address.value;
    let amount=+form.amount.value;
    console.log(amount);
    let user=new signup(name,email,address,amount);
    arr.push(user);
    localStorage.setItem("user",JSON.stringify(arr));
}
