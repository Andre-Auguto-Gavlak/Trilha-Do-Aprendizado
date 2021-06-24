var n1, n2,soma,sub, frase,t, n, cont=0, op, v=[], i=0, resultado
frase="Então vamos la! "
alert(frase)

/*soma com valores reais*/
n1= prompt("Primeiramente iremos fazer a soma de 2 números reais. Por favor entre com um valor: ")
n2= prompt("Por favor entre com outro valor: ")
soma=parseFloat(n1)+parseFloat(n2)
document.write("<h2>O resultado da soma dos números reais é: </h2>")
document.write("<h3>"+soma+"</h3>")

/*soma com valores inteiro*/
n1= prompt("Agora iremos fazer a soma de 2 números inteiros. por favor entre com um valor: ")
n2= prompt("Por favor entre com outro valor inteiro: ")
soma=parseInt(n1)+parseInt(n2)
document.write("<h2>O resultado da soma dos números inteiros é: </h2>")
document.write("<h3>"+soma+"</h3>")

/*Elabore um programa que solicite 2 números e execute a subtração, o programa não deve exibir números negativos.*/
n1=parseInt(prompt("Agora iremos fazer uma subtração, onde o maior número sera subtraido pelo menor. Por favor entre com um valor: "))
n2=parseInt(prompt("Por favor entre com outro valor: "))

if(n1>n2){
    sub=n1-n2
    
}
else{
    sub=n2-n1
    
}
document.write("<h2>O resultado da subtração é: </h2>")
document.write("<h3>"+sub+"</h3>")

/*permita ao usuario inserir um valor e exiba a sua tabuada */
alert("Agora iremos verificar a tabuada de um número e apesar de você não estar vendo, podemos usar 2 estruturas de repetição diferentes para fazer essa verificação e você escolhera a qual vamos usar!")
n=parseInt(prompt("Informe um número para a tabuada: "))
op=parseInt(prompt("informe [1] para While e [2] para For: "))

switch(op){
    case 1:{
		document.write("<h2>O resultado da tabuada do número "+n+ " é:</h2>")
        while(cont<11){
            t=n*cont
            document.write("<h3>"+n+" x "+cont+" = "+t+"</h3>")
            cont++
        }
        break
    }
    case 2:{
		document.write("<h2>O resultado da tabuada do número "+n+ " é:</h2>")
        for(cont=0;cont<11;cont++){
            t=n*cont
            document.write("<h3>"+n+" x "+cont+" = "+t+"</h3>")
        }
        break
    }
    default:{
        alert("Opção Inválida")
        break
    }
}

/*criando e exibindo Array*/
alert("Agora vamos criar um vetor com 5 posições")
for(i=0; i<5; i++){
    v[i]=prompt("informe um valor para o vetor, podendo ser uma palavra ou um número qualquer: ")
}
document.write("<h2>O resultado do vetor é:</h2>")
for(i=0; i<5; i++){
    document.write("<h3>"+v[i]+"</h3>")
}

/*funções*/
alert("Agora iremos fazer 2 multiplicações, ambas de um número por ele mesmo, cada multiplicação sera feita dentro de uma função diferente, uma sera com retorno e a outra sem retorno.")

/*Funções com retorno*/
function cr(n1){
    var r
    r=n1*n1
    return(r) 
}

/*Funções sem Retorno*/
function sr(n2){
    var r
    r=n2*n2
    document.write("<h3>"+r+"</h3>")
}

n1=parseInt(prompt(" Por favor entre com um número para a primeira multiplicação: "))
n2=parseInt(prompt(" Por favor entre com um número para a segunda multiplicação: "))
document.write("<h2>O resultado da função com retorno é: </h2>")
resultado=cr(n1)
document.write("<h3>"+resultado+"</h3>")
document.write("<h2>O resultado da função sem retorno é: </h2>")
sr(n2)
