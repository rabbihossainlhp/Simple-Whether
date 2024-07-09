let searchText = document.querySelector(".inputDiv input");
let searchBtn = document.querySelector(".inputDiv i");
let temperatureDetails = document.querySelector(".det_temp");
let temperature = document.querySelector(".temp");
let timezone = document.querySelector(".timezone");
let TitleTime = document.querySelector(".TitleTimeZone");

//Fetching data ..

const key = "49e00dd10f874d24b549739c6d468c9f";
const baseUrl = "http://api.weatherbit.io/v2.0/current";
const cityName = "Bangladesh";

async function fetchData(URL,KEY,CITY){
    try{
        const completURL = await fetch(`${URL}?key=${KEY}&city=${CITY}`);
        const respons = await completURL.json();
        return respons;
        // console.log(respons);
    }catch(error){
        console.error("may have some problem here:",error);
        alert("May occoured some error/check connection");
    }

}

// 


searchBtn.addEventListener("click",()=>{

        if(searchText.value.trim() === ""){
            alert("please check correct location..");
        }else if(/\d/.test(searchText.value.trim())){
            alert("Location should not contain any number");
        }

    (async()=>{
        const resINout = await fetchData(baseUrl,key,searchText.value);
        console.log(resINout.data);
        TitleTime.style.display = "block";
        temperatureDetails.textContent = resINout.data[0].weather.description;
        temperature.textContent = parseInt(resINout.data[0].app_temp)+".C";
        timezone.textContent = resINout.data[0].timezone;
        


    })();
})


