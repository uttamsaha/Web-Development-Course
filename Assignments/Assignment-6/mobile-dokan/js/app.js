let urls = '';
const errorMsg = document.getElementById('error-msg');
const loadMorePhones = document.getElementById('load-more-phones');
// toggle spinner 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
//toggle search result
const toggleSearchResult = displayStyle => {
    document.getElementById('search-result-toggle').style.display = displayStyle;
}
//load Phones function
const loadPhones = () => {
    toggleSpinner('block');
    toggleSearchResult('none');
    const searchText = document.getElementById('input-field');
    const searchTextValue = (searchText.value).toLowerCase();
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchTextValue}`;
    urls = url;
    searchText.value = '';
    if(searchTextValue == ''){
        errorMsg.innerText = 'Search something... Input field cannot be empty.'
        toggleSpinner('none');
        document.getElementById('load-more').style.display = 'none';
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';
        return;
    }
    if(searchTextValue < 0){
        errorMsg.innerText = 'You cannot give negaitve value....'
        toggleSpinner('none');
        document.getElementById('load-more').style.display = 'none';
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';
        return;
    }
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhones(data.data))
}

//Display All phones function
const displayPhones = phones => {
    const twentyPhones = phones.slice(0,20);
    if(twentyPhones.length === 0){
        errorMsg.innerText = 'No phone found...';
        document.getElementById('load-more').style.display = 'none'
    }
    const divContainer = document.getElementById('search-result');
    divContainer.textContent = '';
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    loadMorePhones.textContent = '';
    document.getElementById('load-more').style.display = 'none';
    twentyPhones.forEach(phone => {
        const div = document.createElement('div');
        div.className = "phone-container";
        div.innerHTML = `
        <div class="card border-0 text-center">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6>${phone.brand}</h6>
                <a href="#" class="btn btn-danger" onclick="loadPhoneDetails('${phone.slug}')">Explore More</a>
            </div>
        </div>
        `;
        divContainer.appendChild(div);
        errorMsg.innerText = '';
        
    })
    //control toggle spinner & search result after show result
    toggleSpinner('none');
    toggleSearchResult('block');
    //load more phones
    if(phones.length > 20){
        document.getElementById('load-more').style.display = 'block';
    }
}

//load phone details by ID
const loadPhoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayPhoneDetails(data.data)
        displaySensor(data.data)
    })
}

//Dipslay phone details function
const displayPhoneDetails = phone => {
    const divContainer = document.getElementById('phone-details');
    divContainer.className = "search-details";
    divContainer.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top w-50 text-center" alt="...">
            <div class="card-body">
            <h4>${phone.name}</h4>
            <p class="text-danger"><span class="fw-bold text-black">Release date: </span>${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
            <h4>Main Features: </h4>
            <p><span class="fw-bold">ChipSet : </span>${phone.mainFeatures.chipSet}</p>
            <p><span class="fw-bold">DisplaySize : </span>${phone.mainFeatures.displaySize}</p>
            <p><span class="fw-bold">Memory : </span>${phone.mainFeatures.memory}</p>
            <p><span class="fw-bold">Storage : </span>${phone.mainFeatures.storage}</p>
            <span class="fw-bold">Sensor : </span>
            <ul id="sensor"></ul>
            <h5>Other Features: </h5>
            <p><span class="fw-bold">WLAN : </span>${phone.others?.WLAN ? phone.others.WLAN : 'Not found'}</p>
            <p><span class="fw-bold">Bluetooth : </span>${phone.others?.Bluetooth ? phone.others.Bluetooth : 'Not found'}</p>
            <p><span class="fw-bold">GPS : </span>${phone.others?.GPS ? phone.others.GPS : 'Not found'}</p>
            <p><span class="fw-bold">NFC : </span>${phone.others?.NFC ? phone.others.NFC : 'Not found'}</p>
            <p><span class="fw-bold">Radio : </span>${phone.others?.Radio ? phone.others.Radio : 'Not found'}</p>
            <p><span class="fw-bold">USB : </span>${phone.others?.USB ? phone.others.USB : 'Not found'}</p>


            </div>
        </div>
    `;
}

const displaySensor = sensors => {
    const allSensor = sensors.mainFeatures.sensors;
    const sensorID = document.getElementById('sensor');
    allSensor.forEach(sensor => {
        const li = document.createElement('li');
        li.innerHTML = `${sensor}`;
        sensorID.appendChild(li);
    })
    
}

const loadMore = () => {
    fetch(urls)
    .then(response => response.json())
    .then(data => displayMore(data.data))
}
const displayMore = phones => {
    remainingPhones = phones.slice(20,);
    
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';

    remainingPhones.forEach(phone => {
        const div = document.createElement('div');
        div.className = "phone-container";
        div.innerHTML = `
        <div class="card border-0 text-center">
            <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6>${phone.brand}</h6>
                <a href="#" class="btn btn-danger" onclick="loadPhoneDetails('${phone.slug}')">Explore More</a>
            </div>
        </div>
        `;
        loadMorePhones.appendChild(div);
        errorMsg.innerText = '';

})
}