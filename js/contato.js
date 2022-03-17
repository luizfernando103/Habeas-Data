let consultorInput = document.querySelector("#consultor");
let assuntoInput = document.querySelector("#assunto");
let enviarButton = document.querySelector("#enviar-mensagem");
let emailInput = document.querySelector("#email");

function addNone(nodeList){
    for (node of nodeList) {
        node.style.display = "none";
    }
}

function addBlock(nodeList){
    for (node of nodeList) {
        node.style.display = "block";
    }
}

assuntoInput.addEventListener("change",(e)=>{
    let educanetConsultores = document.querySelectorAll(".Educanet");
    let erphdConsultores = document.querySelectorAll(".ERPHD");
    consultorInput.value = "";

    
    if(assuntoInput.value == "ERPHD"){
        consultorInput.style.display = "block";
        addNone(educanetConsultores);
        addBlock(erphdConsultores);
    } 
    
    else if(assuntoInput.value == "Educanet"){
        consultorInput.style.display = "block";
        addNone(erphdConsultores);
        addBlock(educanetConsultores);
    } 

    else if(assuntoInput.value == "Adm"){
        consultorInput.style.display = "block";
        addNone(erphdConsultores);
        addNone(educanetConsultores);
    }
    
    else if(assuntoInput.value == ""){
        consultorInput.style.display = "none";
        addNone(erphdConsultores);
        addNone(educanetConsultores);
    }
});

enviarButton.addEventListener("click", (e) => {
    
    if(consultorInput.value == ""){
        alert("Escolha um consultor!");
        consultorInput.focus();
        e.preventDefault();
    }
    
    else if(assuntoInput.value == ""){
        alert("Escolha um assunto!");
        assuntoInput.focus();
        e.preventDefault();
    }

});


emailInput.addEventListener("change", (e) => {
    let regexEl = /^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/;

    if(!(regexEl.test(emailInput.value))){
        alert("Informe um email válido!");
        emailInput.focus();
    }
});