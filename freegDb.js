let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
fetch(url,  {
    headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'b9654171ccmsh25232034b1ad94ap1546b0jsn4c5d36be6c02'
    }
})
    .then( r => r.json())
    .then(data => console.log(data))


let platforms = document.querySelector('#platforms')
let genres = document.querySelector('#genre')
let resultList = document.querySelector('#result-list')

function err() {

}
gameList()
function gameList(){
    fetch(url).then(res => {
        return res.json()
    }).then((gameData) => {
        console.log(gameData)
        resultList.innerHTML = gameData.title

    }).catch((err) => {
        console.log('ERROR', err)
    })
}