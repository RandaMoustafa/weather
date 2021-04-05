/* Global Variables */
//html 
const button = document.getElementById('generate');
//html value
const zip = document.getElementById('zip');
//html dynamically
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

//API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '78d6465bceb98ae4852a77009180b953';

    // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 + ' . '+ d.getDate()+' . '+ d.getFullYear();


//get data

const getWeather= async (baseUrl,zip, apiKey)=>{
    const response = await fetch( `${baseUrl}?zip=${zip},us&units=metric&APPID=${apiKey}`,);
    try{
        const dataResult = await response.json();
        return dataResult;
    }catch(error){
        console.log('error', error);
    }
};
//Posted data

const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        content: data.content
      })
    })
  
    try {
      const newData = await req.json();
      console.log(newData);
      return newData;
    }
    catch (error) {
      console.log(error);
    }
  };

// add eventListener
button.addEventListener('click', ()=>{
    const newZip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseUrl,newZip, apiKey).then(function(data){
        postData('/add', {
            date: d,
            temp: data.main.temp,
            content: feelings
        })
         updateUI();
    })
    });
  


// UI Update

  const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        // update new entry values
            document.getElementById('date').innerHTML =`Date: ${newDate}`;
            document.getElementById('temp').innerHTML =`Temp: ${ allData.temp }`+  ' C ْ';
            document.getElementById('content').innerHTML = `content: ${allData.content}`;
    } catch (error) {
        console.log('error', error);
    }
};
  