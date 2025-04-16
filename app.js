// 8809863335b833e5c6b4e1e2e77df25c
// https://api.openweathermap.org/data/2.5/weather?units=metric&appid=509fbec997d1d77a5c3314068a4f1d9b&q=${inputData.value.toLowerCase()}
// fetch()
// .then()
// .catch();

const nameEl = document.getElementById("name");
const btn = document.getElementById("btn");
const API_KEY = "8809863335b833e5c6b4e1e2e77df25c";

btn.addEventListener("click", async () => {
  const city = nameEl.value.toLowerCase();
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=${city}`;
  // fetch(url)
  //   // Data Format karne ke liye
  //   .then((response) => {
  //     return response.json();
  //   })
  //   // After Formatting Succesfull Response
  //   .then((response2) => {
  //     console.log(response2);
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //   });
  // console.log("Test");

  // Wait For Data

  try {
    const response = await fetch(url);
    // Convert Data into Desirable Format
    const parseresponse = await response.json();
    console.log("parseresponse", parseresponse);
    console.log("Test");
  } catch (error) {
    console.log("Error", error);
  }
});
