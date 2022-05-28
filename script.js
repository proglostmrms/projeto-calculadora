function calcular(){
    // recupera os elementos html
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
  
    var operacao = document.getElementById('operacao')
    var resultado = document.getElementById('resultado')
  
    // consistencias
    if(num1.value == ''){
      alert('Favor digitar um número')
      num1.focus();
      return false
    }
    if(num2.value == ''){
      alert('Favor digitar um número')
      num2.focus();
      return false
    }
  
    // conversão de String para Number
    num1 = Number(num1.value)
    num2 = Number(num2.value)
  
    if(operacao.value == '1'){ // soma
      resultado.value = num1 + num2
    } else if(operacao.value == '2'){ // subtracao
      resultado.value = num1 - num2
    } else if(operacao.value == '3'){ // multiplicação
      resultado.value = num1 * num2
    } else if(operacao.value == '4'){ // divisão
      resultado.value = num1 / num2
    } else {
      alert('Selecione uma operação')
      return false
    }
    
  }