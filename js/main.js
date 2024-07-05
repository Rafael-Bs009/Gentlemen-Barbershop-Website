$(document).ready(function() {
    $('.scroll-link').click(function(e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        var targetOffset = $(targetId).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        errorClass: "custom-error-popup",
        errorElement: "div",
        rules: {
            nome: {
                required: true
            },
            servicoForm: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            servicoForm: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório'
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
            }
    })

    $('.servicos-list button').click(function(){
        const destino = $('.contato-form');
        const selecaoServico = $(this).parent().find('h3').text();
        
        $('#servico-form').val(selecaoServico);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('.precos-list button').click(function(){
        const destino = $('.contato-form');

        $('html').animate({
            scrollTop: destino.offset().top
        })
    })
})