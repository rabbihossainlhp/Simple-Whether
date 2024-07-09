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
    }

}

// 

(async()=>{
    const resINout = await fetchData(baseUrl,key,"america");
    console.log(resINout.data);
})();
