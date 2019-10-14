$(function() {
    $("#eventType").change(function() {
        let selected = $("#eventType :selected").val();
        switch(selected) {
            case "Teatro": {
                $(".livro, .concepcao, .autor, .moderador, .curador, .banda, .artistas").hide();
                
                break;
            }  
            
            case "Cinema": {
                $(".texto, .concepcao, .livro, .autor, .moderador, .curador, .banda, .artistas").hide();
                
                break;
            }

            case "Debate Literário": {
                $(".sinopse, .texto, .concepcao, .diretor, .curador, .banda, .elenco, .artista").hide();
               
                break;
            }

            case "Dança": {
                $(".texto, .livro, .autor, .moderador, .curadoria, .banda, .artistas").hide();
                break;
            }

            case "Artes visuais e exposições": {
                $(".texto, .concepcao, .direcao, .livro, .autor, .moderador, .banda, .elenco, .duracao, .preco").hide();
                break;
            }

            case "Música": {
                $(".texto, .concepcao, .direcao, .livro, .autor, .moderador, .curador, .elenco, .artistas, .duracao, .preco").hide();
                break;
            }
            


            
        }
    
     }
     
    
});
