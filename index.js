function calcularSaldoDeRanks(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas
    let nivelDoRank = Math.floor(saldoVitorias/10)
    

        switch(nivelDoRank){

            case 0:
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Ferro")
                break

            case 1:
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Bronze")
                break
            
            case 2: 
            case 3:
            case 4:
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Prata")
                break
            
            case 5: 
            case 6:
            case 7: 
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Ouro")
                break

            case 8: 
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Diamante")
                break

            case 9: 
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Lendário")
                break

            default: 
                console.log ("O herói tem o saldo de " + saldoVitorias + " e está no nível Imortal")
                break


        }
            
    return saldoVitorias




    
}
let resultado = calcularSaldoDeRanks (50 , 30)