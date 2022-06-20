function verificar(){
    let date = new Date();
    let ano = date.getFullYear();
    let formularioAno = document.getElementById('txtAno');

    let res = document.getElementById('result');

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano ){
        alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        let formSex = document.getElementsByName('radSex');
        let idade = ano - Number(formularioAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'photo')

        if (formSex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'assets/images/foto-bebe-h.jpg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'assets/images/foto-jovem-h.jpg');
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/images/foto-adulto-h.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'assets/images/foto-idoso-h.jpg');
            }
        }else{
            genero = 'Mulher';
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'assets/images/foto-bebe-m.jpg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'assets/images/foto-jovem-m.jpg');
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/images/foto-adulto-m.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'assets/images/foto-idoso-m.jpg');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = (`Detectamos ${genero} com idade de ${idade} anos`)
        res.appendChild(img)
    }
}