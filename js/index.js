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
const getCountryHTML = ({name, flags, population, capital,area}) => {
    // const { name, flags, population, capital } = country
    const { common } = name;
    const { png } = flags;
    return `

    <div class="single_country">
        <h3>${common}</h3>
        <img src="${png}">
        <p>Population: ${population}</p>
        <p>Population: ${capital}</p>
        <p>Area: ${area}</p>
    </div>
    
    `
}
loadData()