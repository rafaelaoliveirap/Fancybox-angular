document.getElementById('enviar').addEventListener('click', function (e) {
    var nome = document.getElementById("nome").value;

    if (nome.length < 3) {
        /* Tem erro - preventDefault() vai cancelar a ação de subumit, ele previne o acontencimento do evento submit */
        e.preventDefault();
        document.getElementById("nome").style.borderColor="red";
    }else{
        document.getElementById("nome").style.borderColor="white";
    }

    //FIM DA VALIDAÇÃO DO NOME

    //VALIDAÇÃO DO EMAIL

    var email=document.getElementById("email").value;
    /* o campo email precisa conter: "@" e "." e não pode estar vazio  */
    
    if(email.indexOf("@")==-1 || 
    email.indexOf(".")==-1 || 
    email.length==""){

        e.preventDefault()
        document.getElementById("email").style.borderColor="red"
    }else{
        document.getElementById("email").style.borderColor="white"
    }

    //FIM DA VALIDAÇÃO DO NOME

    //VALIDAÇÃO DO TELEFONE

    var telefone=document.getElementById("telefone").value;
    /* verificar se tem 11 caracteres  */

    if(telefone.length < 11){
        e.preventDefault();
        document.getElementById("telefone").style.borderColor="red";
    }else{
        document.getElementById("telefone").style.borderColor="white";

    }

    //FIM DA VALIDAÇÃO DO TELEFONE

    //VALIDAÇÃO DO MENSAGEM

    var mensagem=document.getElementById("mensagem").value;
    /* verificar se tem 11 caracteres  */

    if(mensagem.length < 5){
        e.preventDefault();
        document.getElementById("mensagem").style.borderColor="red";
    }else{
        document.getElementById("mensagem").style.borderColor="white";

    }

    //FIM DA VALIDAÇÃO DO MENSAGEM

})
