const request = require('request');

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=c3ffdd540e0c4ca981895711241204&q=himachal&aqi=no'

    request({url:url, json:true},(error,response)=>{

        if (error){
        callback('unable to connect to weather service : ', undefined)
        }
        else if(response.body.error){
        callback('unable to find location :',undefined)
        }
        else{
        callback(undefined , response.body.current.condition.text + 'this is current weather');
        }
        
        })
};



module.exports= forecast