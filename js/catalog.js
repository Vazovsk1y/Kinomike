const allGenresOption = "Все жанры";
const allYearsOption = "Все года";
const allCountriesOption = "Все страны";

function loadData(year, genre, country){
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (!type) {
        return;
    }

    let values = data.filter(e => e.subType === type);
    if (year && year !== allYearsOption){
        // Compare string with year.
        values = values.filter(e => e.year == year);
    }

    if (genre && genre !== allGenresOption){
        values = values.filter(e => e.genre.includes(genre));
    }

    if (country && country !== allCountriesOption){
        values = values.filter(e => e.country.includes(country));
    }

    const cardsContainer = document.getElementById("cards-list");
    cardsContainer.innerHTML = "";

    values.forEach(e => {
        const card = document.createElement("li");
        card.classList.add("flex-container");
        card.classList.add("card");

        card.innerHTML = `
        <img alt="cover" class="card-cover" src="${e.coverUrl + "72x108"}">
        <div class="flex-container card-info">
            <div class="flex-container card-info">
                <h3>${e.ruTitle}</h3>
                <p>${e.enTitle}, ${e.year}, ${e.duration}</p>
                <span>${e.genre}</span>
                <span>${e.country} - Режиссёр: ${e.director}</span>
                <span>В ролях: ${e.starring.join(", ")}</span>
            </div>
        </div>
        <div class="flex-container card-right">
            <p style="color: goldenrod; font-size: 22px">${e.rating}</p>
        </div>
        `;

        cardsContainer.appendChild(card);
    });
}

function initializeSelects(){
    const years = document.getElementById("years-select");
    const genres = document.getElementById("genres-select");
    const countries = document.getElementById("countries-select");
    const currentYear = new Date(Date.now()).getFullYear();

    let firstOption = document.createElement("option");
    firstOption.value = allYearsOption;
    firstOption.textContent = allYearsOption;
    firstOption.selected = true;

    years.appendChild(firstOption);

    const lower = 1970;
    for (let i = currentYear; i > lower; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        years.appendChild(option);
    }

    firstOption = document.createElement("option");
    firstOption.value = allGenresOption;
    firstOption.textContent = allGenresOption;
    firstOption.selected = true;

    genres.innerHTML = `
    ${firstOption.outerHTML}
    ${genres.innerHTML}   
    `;

    firstOption = document.createElement("option");
    firstOption.value = allCountriesOption;
    firstOption.textContent = allCountriesOption;
    firstOption.selected = true;

    countries.innerHTML = `
    ${firstOption.outerHTML}
    ${countries.innerHTML}
    `;

    years.addEventListener("change", (e) => {
        const selectedYear = e.target.value;
        const selectedGenre = genres.value;
        const selectedCountry = countries.value;

        loadData(selectedYear, selectedGenre, selectedCountry);
    });

    genres.addEventListener("change", (e) => {
        const selectedYear = years.value;
        const selectedGenre = e.target.value;
        const selectedCountry = countries.value;

        loadData(selectedYear, selectedGenre, selectedCountry);
    });

    countries.addEventListener("change", (e) => {
        const selectedYear = years.value;
        const selectedGenre = genres.value;
        const selectedCountry = e.target.value;

        loadData(selectedYear, selectedGenre, selectedCountry);
    });
}

loadData(allYearsOption, allGenresOption, allCountriesOption);
initializeSelects();