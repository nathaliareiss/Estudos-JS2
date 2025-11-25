function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO] Digite o ano novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero=''
        var img = document.createElement ('img')
        img.setAttribute ('id','foto')
        img.style.height = '250px'
       if (fsex [0].checked){
            genero = "Homem"
            if (idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','bebem.jpg')
             }else if (idade <= 25){
                    //jovem
                    img.setAttribute('src','hjovem.jpg')
             } else if (idade <50){
                    //adulto
                    img.setAttribute('src','hadulto.jpg')
             } else{
                    img.setAttribute('src','hidoso.jpg')
             }
                }
            
        else if (fsex[1].checked){
        genero = 'Mulher'
         if (idade >=0 && idade <10){
                //crianca
                img.setAttribute('src','bebef.jpg')
             }else if (idade <=25){
                    //jovem
                    img.setAttribute('src','mjovem.jpg')
             } else if (idade <50){
                    //adulto
                    img.setAttribute('src','madulta.jpg')
             } else{
                img.setAttribute('src','midosa.jpg')
                
             } 
            }
        res.style.textAlign= 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

            
        }}