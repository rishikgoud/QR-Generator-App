let inputtext = document.querySelector(".inputtext");
let qrimage = document.querySelector(".qrimage");
let qrbox = document.querySelector(".image");

function generateqrimg(){
    if(inputtext.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?&data=" + inputtext.value;
        qrbox.classList.add("show-img");
    }
    else{
        inputtext.classList.add("error");
        setTimeout(() => {
            inputtext.classList.remove("error");
        }, 1000);
    }
}