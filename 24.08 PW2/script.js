$(document).ready(function(){

    $('p').hide()

    // Monitorar o click no botão "read"
    $('#read').click(function(e){
        e.preventDefault()

        $('p').toggle(1500, function(){
            // Criar uam Variavel para receber os status
            let status = $(this).attr('data-status')
            // Limpando o label do btn
            $('#read').empty()
            // Testando o status 
            if(status == 1 ){
                $('#read').append('Esconder resumo')
                $('#read').attr('data-status', '2')
            }else{
                $('#read').append('Ver Resumo')
                $('#read').attr('data-status', '1')
            }
        })
    })
})