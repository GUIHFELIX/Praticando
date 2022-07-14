let qtdDeAlunos = 0;
qtdDeAlunos = prompt("Informe a Quantidade de Alunos");

for (let i = 0; i <=qtdDeAlunos; i++) {

    if (i == 0){
        console.log("ZERO",i);
    } else if (i % 2 == 0){
        console.log("PAR " +i);   
    } else{
        console.log(`IMPAR ${i}`);
    }
    
}