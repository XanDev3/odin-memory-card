const GetSrc = async() => {
    const cardArray = []
    const names= 
    [
        "KSante",
        "Azir",
        "Jinx",
        "Jayce",
        "Ekko",
        "Gnar",
        "Heimerdinger",
        "Kayle",
        "LeeSin",
        "Lux",
        "Morgana",
        "Seraphine",
    ]
    for (let i=0; i < names.length; i++){
        const src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${names[i]}_0.jpg`
        const id = i;
        cardArray.push({id, src}) 
    }
    return cardArray
}
/* 12 League Champs 
K'sante
Azir
Jinx
Jayce
Ekko
Gnar
Heimerdinger
Kayle
Lee Sin
Lux
Morgana
Seraphine
*/

export default GetSrc