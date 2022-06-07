class Fetch {
  async getCurrent(input) {
    const myKey = "626aa3196b79e836a0c56050627075d2";

    //Calling the API

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`

    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
