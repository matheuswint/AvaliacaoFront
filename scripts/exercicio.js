function calcular(){
    let numero1= Number(document.getElementById("numero1").value);
    let numero2= Number(document.getElementById("numero2").value);

    let soma = numero1 + numero2;
    let sub = numero1 - numero2;
    let multi = numero1 * numero2;
    let divi = numero1 / numero2;

    document.getElementById("resultado").innerHTML = `
    <p>Soma: ${soma}<p/>
    <p>Subtração: ${sub}<p/>
    <p>Multiplicação: ${multi}<p/>
    <p>Divisão: ${divi}<p/>
    `;
}