var saida = document.getElementById('saida');
var botaoGerarCPF = document.getElementById('botao');
var campoCopiar = document.getElementById('campoCopiar');
var icone = '';
var selecao = document.getElementById('select');

botaoGerarCPF.addEventListener('click', function () {
    saida.value = gerarCPF();
    campoCopiar.textContent = '';
    adicionarIconeCopiar();
    adicionarTextoCopiar();
});

campoCopiar.addEventListener('click', function () {
    saida.select();
    document.execCommand('copy');
    campoCopiar.textContent = '';
    adicionarIconeConfere();
    adicionarTextoCopiado();

    setTimeout(function () {
        campoCopiar.textContent = '';
        adicionarIconeCopiar();
        adicionarTextoCopiar();
    }, 2000);
});

botaoGerarCPF.addEventListener('mousedown', botaoClicado);
botaoGerarCPF.addEventListener('mouseup', botaoNormal);

function gerarCPF() {

    let cpf = '';

    do {
        cpf = '';

    for (let i = 0; i < 8; i++) {
        cpf += parseInt(Math.random() * 10);
    }

    switch (selecao.value) {
        case 'IND':
            cpf += parseInt(Math.random() * 10);
            break;
        case 'AC':
            cpf += 2;
            break;
        case 'AL':
            cpf += 4;
            break;
        case 'AP':
            cpf += 2;
            break;
        case 'AM':
            cpf += 2;
            break;
        case 'BA':
            cpf += 5;
            break;
        case 'CE':
            cpf += 3;
            break;
        case 'DF':
            cpf += 1;
            break;
        case 'ES':
            cpf += 7;
            break;
        case 'GO':
            cpf += 1;
            break;
        case 'MA':
            cpf += 3;
            break;
        case 'MT':
            cpf += 1;
            break;
        case 'MS':
            cpf += 1;
            break;
        case 'MG':
            cpf += 6;
            break;
        case 'PA':
            cpf += 2;
            break;
        case 'PB':
            cpf += 4;
            break;
        case 'PR':
            cpf += 9;
            break;
        case 'PE':
            cpf += 4;
            break;
        case 'PI':
            cpf += 3;
            break;
        case 'RR':
            cpf += 2;
            break;
        case 'RO':
            cpf += 2;
            break;
        case 'RJ':
            cpf += 7;
            break;
        case 'RN':
            cpf += 4;
            break;
        case 'RS':
            cpf += 0;
            break;
        case 'SC':
            cpf += 9;
            break;
        case 'SP':
            cpf += 8;
            break;
        case 'SE':
            cpf += 5;
            break;
        case 'TO':
            cpf += 1;
            break;
        default:
            break;
    }

    let arrayCPF = cpf.split('').map(function (num) {
        return Number(num);
    });

    function primeiroDigito() {
        let somaDig1 = 0;
        let pesoDig1 = 10;

        for (let i = 0; i < 9; i++) {
            somaDig1 += arrayCPF[i] * pesoDig1;
            pesoDig1--;
        }
        return somaDig1;
    }

    const restoDig1 = primeiroDigito() % 11;
    let dig1 = '';

    if (restoDig1 < 2) {
        dig1 = 0;
    } else {
        dig1 = 11 - restoDig1;
    }

    cpf += dig1;
    arrayCPF.push(dig1);

    function segundoDigito() {
        let somaDig2 = 0;
        let pesoDig2 = 10;

        for (let i = 1; i < 10; i++) {
            somaDig2 += arrayCPF[i] * pesoDig2;
            pesoDig2--;
        }
        return somaDig2;
    }

    const restoDig2 = segundoDigito() % 11;
    let dig2 = '';

    if (restoDig2 < 2) {
        dig2 = 0;
    } else {
        dig2 = 11 - restoDig2;
    }

    cpf += dig2;
} while (saoDigitosIguais(cpf));

    const cpfFormatado = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

    return cpfFormatado;
}

function saoDigitosIguais(cpf){
    return /^(\d)\1{10}$/.test(cpf);
}

function adicionarIconeCopiar() {
    icone = document.createElement('i');
    icone.classList.add('far', 'fa-copy');
    campoCopiar.insertBefore(icone, campoCopiar.firstChild);
}

function adicionarTextoCopiar() {
    const textoCopiar = document.createElement('span');
    textoCopiar.textContent = ' Copiar';
    campoCopiar.insertBefore(textoCopiar, campoCopiar.firstChild.nextSibling);
}

function adicionarIconeConfere() {
    icone = document.createElement('i');
    icone.classList.add('far', 'fa-check-circle');
    campoCopiar.insertBefore(icone, campoCopiar.firstChild);
}

function adicionarTextoCopiado() {
    const textoCopiado = document.createElement('span');
    textoCopiado.textContent = ' Copiado!';
    campoCopiar.insertBefore(textoCopiado, campoCopiar.firstChild.nextSibling);
}

function botaoClicado() {
    botaoGerarCPF.classList.add('clique');
}

function botaoNormal() {
    botaoGerarCPF.classList.remove('clique');
}