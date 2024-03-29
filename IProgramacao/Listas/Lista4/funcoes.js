// Exercicio 1
function calcularOperacao(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Operação não reconhecida";
    }
}

// Exercicio 2
function executarOperacao(num1, num2, escolha) {
    switch (escolha) {
        case 1:
            return (num1 + num2) / 2;
        case 2:
            return Math.abs(num1 - num2);
        case 3:
            return num1 * num2;
        case 4:
            if (num2 === 0) {
                return "Divisão por zero não permitida";
            }
            return num1 / num2;
        default:
            return "Opção inválida";
    }
}

// Exercicio 3
function classificarNadador(idade) {
    if (idade >= 5 && idade <= 7) {
        return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto";
    } else if (idade >= 60) {
        return "Sênior";
    } else {
        return "Idade não categorizada";
    }
}

// Exercicio 4
function calcularIMC(nome, peso, altura) {
    const imc = peso / (altura ** 2);
    if (imc < 20) {
        return `${nome} - Abaixo do peso`;
    } else if (imc >= 20 && imc <= 25) {
        return `${nome} - Normal`;
    } else if (imc > 25 && imc <= 30) {
        return `${nome} - Excesso de peso`;
    } else if (imc > 30 && imc <= 35) {
        return `${nome} - Obesidade`;
    } else {
        return `${nome} - Obesidade mórbida`;
    }
}

// Exercicio 5
function calcularReajusteSalario(salario) {
    if (salario < 945) {
        return salario * 1.25;
    } else if (salario >= 945 && salario < 1025) {
        return salario * 1.10;
    } else {
        return salario * 1.03;
    }
}
