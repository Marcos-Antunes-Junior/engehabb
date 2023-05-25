function myFunction(){
        const valorNome = document.getElementById("nomecompleto").value;
        const valorTel = document.getElementById("telefone").value;
        const valorEmail = document.getElementById("endEmail").value;

        if(valorNome == "" || valorTel == "" || valorEmail == ""){
        alert("Por favor, preencha o formulário antes de enviar.");
        }else{
        alert(`Obrigado, ${valorNome}! Entraremos em contato o mais breve possível.`);
        }
        
        
  
 }

 