const loadData = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayData(data))
        // .then(data => console.log(data))
};

const displayData = countries => {
    console.log(countries[0])
    const allCountries = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountries.join(' ')

}
const getCountryHTML = country => {
    return `
    <div>
        <h3>${country.name.common}</h3>
        <img src="${country.flags.png}">
    </div>
    
    `
}
loadData()