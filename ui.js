class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML
    
                // <h6 class="card-subtitle mb-2 text-muted">Highs: ${data.main.temp_max}</h6>
                //<h6 class="card-subtitle mb-2 text-muted">Lows: ${data.main.temp_min}</h6>
                //<p class="card-text ">Weather described as: ${data.weather[0].description}</p>
                //<p class="card-text ">feels_like: ${data.feels_like}</p>

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h1 class="card-title">${data.name}</h1>
                <h6 class="p-1 fa fa-arrow-up fa_custom fa-2x" class="card-subtitle mb-2 text-muted"> Highs: ${data.main.temp_max}</h6>
                <h6 class="p-1 fa fa-arrow-down fa_custom fa-2x" class="card-subtitle mb-2 text-muted"> Lows: ${data.main.temp_min}</h6>
                <i class="p-1 fa fa-cloud fa_custom" class="card-text " size="14"> Weather described as: ${data.weather[0].description}</i>
                <i class="p-1 fa fa-smile-o fa_custom"class="card-text "> feels_like: ${data.feels_like}</i>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
