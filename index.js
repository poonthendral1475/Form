let form=document.getElementById("submit")
let n=document.getElementById("name")
let p=document.getElementById("password")
let c=document.getElementById('cpassword')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validation();
})
function validation(){
    let nVal=n.value
    let pVal=p.value
    let cVal=c.value
    if(!nVal)
    {
        setError(n,"this field is required");
        valid=false;
    }
    else{
         removeError(n);
    }
    if(!pVal)
    {
        setError(p,"this field is required");
        valid=false;
    }
    else if(pVal.length<8)
    {
        setError(p,"must have more than 8 chareter");
        valid=false;
    }
    else{
        removeError(p)
    }
    if(!cVal){
        setError(c,"this field is required")
    
    }
    else if(cVal!=pVal)
    {
        setError(c,"not match")
    }
    else{
        removeError(c)
    }
    return valid;

}
function setError(element,message){
    let errorGrp=element.parentElement;
    let errorMsgEle=errorGrp.querySelector(".errmsg");
    errorMsgEle.innerText=message
    errorGrp.classList.add("design")
    
}
function removeError(element)
{
    let errorGrp=element.parentElement;
    let errorMsgEle=errorGrp.querySelector(".errmsg");
    errorMsgEle.innerText=""
    errorGrp.classList.remove("design")
}
