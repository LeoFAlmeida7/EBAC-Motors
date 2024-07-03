$(document).ready(function(){
    $('#carouselImagem').slick({
        autoplay:true
    });

    $('.menuHamburger').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX)XXXXX-XXXX'
    })

    $('form').validate({
       rules: {
           nome: {required: true },
           email: {required: true },
           telefone: {required: true },
           veiculoInteresse: {required: false },
           mensagem: {required: true }
       },
       messages: {
        nome: 'Por favor insira seu nome',
        telefone: 'Por favor insira seu telefone',
        email: 'Por favor preencha seu email',
        mensagem: 'Preencha o campo da mensagem'
       },
       submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            } 
        }
    })

    $('.listaVeiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})