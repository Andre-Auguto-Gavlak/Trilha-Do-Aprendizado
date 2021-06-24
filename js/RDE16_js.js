function enviar(){
    var nome= document.getElementById("nome")
    var email= document.getElementById("email")
    var data= document.getElementById("data")
    var ok

    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOf("@")!=-1){
            alert(nome.value+", Agradecemos o Seu Contato")
            ok=true
        }
        else{
            alert("Preencha Seu Email Corretamente!")
            ok=false
        }
       
    }
    else{
        alert("Preencha Seu Nome Completo!")
        ok=false
    }
    return ok
}