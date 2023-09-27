const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const countryList = document.getElementById("country-list")

function searchCountries(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {console.log(data)})

}


searchButton.addEventListener('click', function () {
    const countryText = searchInput.value.trim()
    
    if(countryText.length > 2){
        searchCountries(countryText)
    }else{
        countryList.innerHTML = '<p>Enter at least 3 characters to search</p>'
    }
})
