class dataManager {
    constructor() {
        this.data
    }

    players() {
        const teamName = $('#input').val()
        $('#input').val("")
        $.get(`teams/${teamName}`, (data) =>  {
            this.data = data
        })
    }
}