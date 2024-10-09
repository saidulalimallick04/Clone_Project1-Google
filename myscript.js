
const searchBtn=document.getElementById("searchBtn");
const inputField=document.getElementById("inputField");



searchBtn.addEventListener('click',()=>{
    window.location.href=`https://www.google.com/search?q=${inputField.value}`
});