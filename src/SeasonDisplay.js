import './SeasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat,props.lon,new Date().getMonth(),props.tem);
    const {text,iconName}=seasonConfig[season] // { text, iconName}
    //const text = Season === 'winter' ? 'Burr, it is chilly' : 'Let`s hit the beach';
    //const icon = Season === 'winter' ? 'snowflake' : 'sun';
    
return (
    <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

const seasonConfig = {//here we are making key value pair
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },//objects
    winter: {
        text: "Burr! It is cold!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, lon, month, temp) => {
    console.log(lat+' '+lon+' '+month+' '+temp);
    /*fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f37fa9efff39eaa2d93fb94169e3d0a`)
        .then(response => response.json())
        .then((data) => {temp= data.main.temp});
        console.log('Temp '+temp);*/
        if(temp<22)
            return 'winter';
        else
            return 'summer';
    /*if(month>2 && month<9) {
        return lat > 0 ? 'summer' : 'winter';
    }else {
        return lat > 0 ? 'winter' : 'summer';
    }*/
}

export default SeasonDisplay;