const naslov = document.getElementById('naslov')
const tekst = document.getElementById('tekst')
const forma = document.getElementById('forma')
const trazeniIzvodjac = document.getElementById('trazeniIzvodjac')
const trazenaPesma = document.getElementById('trazenaPesma')

function ucitajPodatke() {
    const izvodjac = trazeniIzvodjac.value
    const pesma = trazenaPesma.value
    naslov.innerText = izvodjac + ' - ' + pesma
    // const url = 'https://api.lyrics.ovh/v1/izvodjac/pesma' + izvodjac + '/' + pesma
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`

    fetch(url)
        .then((response) => response.json())
        .then(objekat => {
            tekst.innerText = objekat.lyrics ? objekat.lyrics : 'Nema pesme'
        })
}

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    ucitajPodatke();

})