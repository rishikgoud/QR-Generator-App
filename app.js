let inputtext = document.querySelector(".inputtext");
let qrimage = document.querySelector(".qrimage");
let qrbox = document.querySelector(".image");
let subcontain = document.querySelector(".subcontainer");
let p = document.createElement("span");
// let delimage = document.querySelector(".inputimg");

function generateqrimg(){
    if(inputtext.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?&data=" + inputtext.value;
        qrbox.classList.add("show-img");
        p.innerHTML= "\u00d7";
        p.classList.add("showimg");
        subcontain.appendChild(p);
        p.addEventListener("click",deleteqr);
    }
    else{
        inputtext.classList.add("error");
        setTimeout(() => {
            inputtext.classList.remove("error");
        }, 1000);
    }
}
function deleteqr(){
    p.innerHTML = '';
    inputtext.value = '';
    qrimage.src = '';
    qrbox.classList.remove("show-img");

}

