let url = 'https://api.sheety.co/616e2b8adcefcae61fd525fb7d6e96c8/form/user';
  let body = {
    user: {
        nome: name,
        email: email,
        senha: senha  
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.user);
  });


function Enviar(){
    let nome =  document.getElementById("inputname").value;
    let email = document.getElementById("inputemail").value;
    let senha = document.getElementById("inputsenha");

    alert(nome);
    
    var texto = "Nome: " + nome + "; Email: "+ email + "; Senha: "+ senha; 

    let url = 'https://api.sheety.co/616e2b8adcefcae61fd525fb7d6e96c8/form/user';
    let body = {
    user: {
        nome: name,
        email: email,
        senha: senha  
    }
   }
   fetch(url, {
     method: 'POST',
     body: JSON.stringify(body),
     headers: {​​
        "Accept": "application/json",
        "Content-Type": "application/json"
     }​
     
   })
   .then((response) => response.json())
   .then(json => {
    // Do something with object
    console.log(json.user);
  });

    return texto;
    
}
