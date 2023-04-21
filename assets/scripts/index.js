function realizarOperaciones() {
    // Obtener los valores de los campos de entrada
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
  
    // Verificar que los valores ingresados sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingrese dos números válidos.");
      return;
    }
  
    // Realizar las operaciones matemáticas y mostrar los resultados
    for (let i = 1; i <= 5; i++) {
      let resultado;
      switch (i) {
        // Operación suma
        case 1:
          resultado = num1 + num2;
          document.getElementById("resultado1").innerHTML = `Suma: ${resultado}`;
          break;
        // Operación resta
        case 2:
          resultado = num1 - num2;
          document.getElementById("resultado2").innerHTML = `Resta: ${resultado}`;
          break;
        // Operación multiplicación
        case 3:
          resultado = num1 * num2;
          document.getElementById("resultado3").innerHTML = `Multiplicación: ${resultado}`;
          break;
        // Operación división
        case 4:
          if (num2 === 0) {
            document.getElementById("resultado4").innerHTML = "No se puede dividir por cero.";
          } else {
            resultado = num1 / num2;
            document.getElementById("resultado4").innerHTML = `División: ${resultado}`;
          }
          break;
        // Operación modulo 
        case 5:
          resultado = num1 % num2;
          document.getElementById("resultado5").innerHTML = `Módulo: ${resultado}`;
          break;
      }
    }
  }
  