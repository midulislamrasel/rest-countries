const loadData = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayData(data))
        // .then(data => console.log(data))
};

const displayData = allCountries => {
    const countries = allCountries.map(country,)
}
loadData()