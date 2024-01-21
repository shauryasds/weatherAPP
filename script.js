const apiKey="d565e1b05e5ea4a3f8619e8672177be8";
const search=document.getElementById("searchIcon");

async function apiFetch(){
    let city=document.getElementById("city").value;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let  Apiresponse=await fetch(url);
    let response=await Apiresponse.json();

    document.getElementsByClassName("temp")[0].innerText= response.main.temp;
    

    document.getElementsByClassName("city")[0].innerText= response.name;

    document.getElementsByClassName("humidity")[0].innerText= response.main.humidity;

    document.getElementsByClassName("windspeed")[0].innerText= response.wind.speed;



}
search.addEventListener('click',(e)=>{
    apiFetch()
    
})

