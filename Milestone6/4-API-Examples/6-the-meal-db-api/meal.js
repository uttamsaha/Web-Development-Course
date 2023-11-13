const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if(searchText == ''){
        alert('Enter food');
        return;
    }
    console.log(searchText);
    //clear input filed
    searchField.value = '';
    //clear previous result



    //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error)) // error handling
}

const displaySearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    //clear previous search result
    searchResult.innerHTML = '';
    // searchResult.textContent = '';

    if(meals.length == 0){
        //show no result found Homw work
    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    //clear previous meal detial history
    mealDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `
    mealDetails.appendChild(div);
}

const displayError = error =>{
    document.getElementById('error-msg').style.display = 'block';
}