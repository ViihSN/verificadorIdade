function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/criançaFeminina.png');
            } else if (idade >= 10 && idade < 27) {
                //Jovem
                img.setAttribute('src', 'img/jovemFeminino.png');
            } else if (idade >= 27 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultoFeminino.png');
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosaFeminino.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/criançaMasculino.png');
            } else if (idade >= 10 && idade < 27) {
                //Jovem
                img.setAttribute('src', 'img/jovemMasculino.png');
            } else if (idade >= 27 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultoMasculino.png');
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosoMasculino.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}