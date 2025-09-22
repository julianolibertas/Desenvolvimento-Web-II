const frm = document.querySelector("form");
const resp = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const senha = frm.inSenha.value;
  const erros = [];
  if (senha.length<8 || senha.length >15){
    erros.push("Possuir entre 8 e 15 caracteres");
  }
  if (senha.match(/[0-9]/g)==null){
    erros.push("Possuir números(no mínimo, 1)");
  }
  

});