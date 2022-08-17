$(document).ready(function(){
    //Selecionando o elemento que iremos monitorar o click
    $('.btn').click(function(e){
        e.preventDefault()

        //Armazenando os dados digitados em variaveis
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var mensagem = 'Seja Bem Vindo ' +nome +', Sua Idade é ' +idade
        
        $('#Mensagem').append(mensagem)

        //Limpar os campos do formularios
        $('#NOME').val('')
        $('#IDADE').val('')

        $('#NOME').focusin(function(){
            $('#Mensagem').empty()
        })
    })
})