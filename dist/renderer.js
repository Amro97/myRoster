
class Renderer{

    renderPlayer(players){
        const playersObj = {players}
        const source = $("#player-template").html()
        const template = Handlebars.compile(source)
        const playerHTML = template(playersObj)
        $('#player-container').empty().append(playerHTML)
    }
}
