import Loading from "../../LoadingBar/LoadingBar";

import React, { useEffect, useState } from "react";
import "./Weather.css";

export default function Weather(place) {
  const [load, setload] = useState(true);
  const [response1, setResponse1] = useState();
  
  const [response2, setResponse2] = useState([]);
  const [response3, setResponse3] = useState();

  const [img, setimg] = useState();
  const [isOk, setisOk] = useState(true);
  // const response1 = useRef();
  const [dirDeg, setdirDeg] = useState();

  function roundOffEr (num , dec) {
    let tmpNum = num * (10**dec);
    tmpNum = Math.floor(tmpNum);
    tmpNum = tmpNum / (10**dec);
    return tmpNum;
  }

  function func(daysArr) {
    return daysArr.map((day) => {
      let res = {
        maxTemp: {
          val: day.hours[0].temp,
          hr: day.hours[0].datetime
        },
        minTemp: {
          val: day.hours[0].temp,
          hr: day.hours[0].datetime
        },
        rainfall: {
          max: day.hours[0].precip,
          min: day.hours[0].precip,
          avg: roundOffEr(day.hours[0].precip/24, 2),
          tot: day.precip
        },
        precpprob: day.precipprob
      }
  
  
      return day.hours.reduce((accumulator, currHour) => {
        if (currHour.temp > accumulator.maxTemp.val) {
          accumulator.maxTemp.val = currHour.temp;
          accumulator.maxTemp.hr = currHour.datetime;
        }
  
        if (currHour.temp < accumulator.minTemp.val) {
          accumulator.minTemp.val = currHour.temp;
          accumulator.minTemp.hr = currHour.datetime;
        }
  
        if (currHour.precip > accumulator.rainfall.max) {
          accumulator.rainfall.max = currHour.precip;
        }
  
        if (currHour.precip < accumulator.rainfall.min) {
          accumulator.rainfall.min = currHour.precip;
        }
  
        // accumulator.rainfall.avg += currHour.precip;
  
        return accumulator;
      }, res)
    })
  }
  function func1(obj){
    let date1 = obj[0].datetime;
    let date2 = obj[1].datetime;
    let date3 = obj[2].datetime;
    date1 = new Date(date1);
    date2 = new Date(date2);
    date3 = new Date(date3);
    return {0: date1.toString(), 1: date2.toString(), 2: date3.toString()}

  }

  let results, dir;
  useEffect(() => {
    async function getResponse() {
      let response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place.place}?unitGroup=metric&key=4T2XTBKQP6CXWRAFYYDC58EB4&contentType=json`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        setisOk(false);
        setload(false);
      }
      results = await response.json();
      setResponse1(results);
      let resp2 = func(results.days.slice(1, 4));
      setResponse2(resp2);
      let res3 = func1(results.days.slice(1, 4));
      setResponse3(res3);
      console.log(response3);
      setdirDeg(Math.round(results.currentConditions.winddir / 22.5));
      let url = results.currentConditions.icon;
      setimg(url);
      setload(false);
    }
    getResponse();
  }, []);
  dir = {
    0: "N",
    1: "NNE",
    2: "NE",
    3: "ENE",
    4: "E",
    5: "ESE",
    6: "SE",
    7: "SSE",
    8: "S",
    9: "SSW",
    10: "SW",
    11: "WSW",
    12: "W",
    13: "WNW",
    14: "NW",
    15: "NNW",
    16: "N",
  };
  
  return (
    <div className="weather">
      {load ? (
        <Loading />
      ) : !isOk ? (
        <h3 style={{color: 'black'}}>Sorry No Weather Details Found :&#40; [Err:400]</h3>
      ) : (
        <>
          <div className="row">
            <div className="widget onecols" data-v-0f3d927f="">
              <div className="current maingrid" data-v-0f3d927f="">
                <div className="period" data-v-0f3d927f="">
                  Current Weather: {response1.currentConditions.datetime}
                </div>
                <div className="summary summarykpis4" data-v-0f3d927f="">
                  <div className="icon" data-v-0f3d927f="">
                    <div data-v-0f3d927f="">
                      <img src={`../WeatherComponents/${img}.svg`} alt="" />
                    </div>
                  </div>
                  <div className="kpi summary" data-v-0f3d927f="">
                    <div className="subtitle">Temp Min</div>
                    <div className="value">
                      {response1.days[0].tempmin}&deg;C
                    </div>
                  </div>
                  <div className="kpi summary" data-v-0f3d927f="">
                    <div className="subtitle">Temp Max</div>
                    <div className="value">
                    {response1.days[0].tempmax}&deg;C
                    </div>
                  </div>
                  <div className="kpi summary" data-v-0f3d927f="">
                    <div className="subtitle">Rain</div>

                    <div className="value">
                    {response1.days[0].precip}mm
                    </div>
                  </div>
                  <div className="kpi summary" data-v-0f3d927f="">
                    <div className="subtitle">Wind</div>
                    <div className="value">
                      {dir[dirDeg]} {response1.currentConditions.windspeed}KpH
                    </div>
                  </div>
                </div>
                <div className="kpi" data-v-0f3d927f="">
                  <div className="subtitle">Sunrise</div>
                  <div>{response1.currentConditions.sunrise}</div>
                </div>
                <div className="kpi" data-v-0f3d927f="">
                  <div className="subtitle">Sunset</div>
                  <div>{response1.currentConditions.sunset}</div>
                </div>
                <div className="kpi moonphase" data-v-0f3d927f="">
                  <div className="subtitle ">Description</div>
                  <div className="weatherSummary">
                    {response1.days[0].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="threeDay">
            <div class="row three">
              <div class="widget threecols" data-v-0f3d927f="">
                <div class="maingrid threeDayDetails" data-v-0f3d927f="">
                  <div class="period" data-v-0f3d927f="">
                    {response3["0"].substr(0,15)}
                  </div>
                  <div class="summary summarykpis4 three" data-v-0f3d927f="">
                    <div class="icon" data-v-0f3d927f="">
                      <img src={`../WeatherComponents/${response1.days[1].icon}.svg`} alt="" />
                    </div>
                    <div className="threeNano">
                      <div className="threeNanoOne">
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Max</div>
                      <div>{response1.days[1].tempmax}℃</div>
                      <div class="normals">
                        <div>{response2[0].maxTemp.hr.substr(0,2)}</div>
                        <div>{response2[0].maxTemp.hr.substr(3,2)}</div>
                        <div>{response2[0].maxTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Min</div>
                      <div>{response1.days[1].tempmin}℃</div>
                      <div class="normals">
                        <div>{response2[0].minTemp.hr.substr(0,2)}</div>
                        <div>{response2[0].minTemp.hr.substr(3,2)}</div>
                        <div>{response2[0].minTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    </div>
                    <div className="threeNanoOne">

                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Rain</div>
                      <div>{response1.days[1].precip}mm</div>
                      <div class="normals">
                        <div>{response2[0].rainfall.min}</div>
                        <div>{response2[0].rainfall.avg}</div>
                        <div>{response2[0].rainfall.max}</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Mean</div>
                        <div class="subtitle">Max</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Precip%</div>
                      <div>{response1.days[1].precipprob}%</div>
                    </div>
                    </div>
                    </div>
                  </div>
                  <div class="description three" data-v-0f3d927f="">
                  {response1.days[1].description}
                  </div>
                </div>
                <div class="maingrid threeDayDetails" data-v-0f3d927f="">
                  <div class="period" data-v-0f3d927f="">
                  {response3["1"].substr(0,15)}

                    
                  </div>
                  <div class="summary summarykpis4 three" data-v-0f3d927f="">
                    <div class="icon" data-v-0f3d927f="">
                      <img src={`../WeatherComponents/${response1.days[2].icon}.svg`} alt="" />
                    </div>
                    <div className="threeNano">
                      <div className="threeNanoOne">
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Max</div>
                      <div>{response1.days[2].tempmax}℃</div>
                      <div class="normals">
                        <div>{response2[1].maxTemp.hr.substr(0,2)}</div>
                        <div>{response2[1].maxTemp.hr.substr(3,2)}</div>
                        <div>{response2[1].maxTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Min</div>
                      <div>{response1.days[2].tempmin}℃</div>
                      <div class="normals">
                        <div>{response2[1].minTemp.hr.substr(0,2)}</div>
                        <div>{response2[1].minTemp.hr.substr(3,2)}</div>
                        <div>{response2[1].minTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    </div>
                    <div className="threeNanoOne">

                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Rain</div>
                      <div>{response1.days[2].precip}mm</div>
                      <div class="normals">
                        <div>{response2[1].rainfall.min}</div>
                        <div>{response2[1].rainfall.avg}</div>
                        <div>{response2[1].rainfall.max}</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Mean</div>
                        <div class="subtitle">Max</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Precip%</div>
                      <div>{response1.days[2].precipprob}%</div>
                    </div>
                    </div>
                    </div>
                  </div>
                  <div class="description three" data-v-0f3d927f="">
                  {response1.days[2].description}
                  </div>
                </div>
                <div class="maingrid threeDayDetails" data-v-0f3d927f="">
                  <div class="period" data-v-0f3d927f="">
                  {response3["2"].substr(0,15)}

                    
                  </div>
                  <div class="summary summarykpis4 three" data-v-0f3d927f="">
                    <div class="icon" data-v-0f3d927f="">
                      <img src={`../WeatherComponents/${response1.days[3].icon}.svg`} alt="" />
                    </div>
                    <div className="threeNano">
                      <div className="threeNanoOne">
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Max</div>
                      <div>{response1.days[3].tempmax}℃</div>
                      <div class="normals">
                        <div>{response2[2].maxTemp.hr.substr(0,2)}</div>
                        <div>{response2[2].maxTemp.hr.substr(3,2)}</div>
                        <div>{response2[2].maxTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Min</div>
                      <div>{response1.days[3].tempmin}℃</div>
                      <div class="normals">
                        <div>{response2[2].minTemp.hr.substr(0,2)}</div>
                        <div>{response2[2].minTemp.hr.substr(3,2)}</div>
                        <div>{response2[2].minTemp.hr.substr(6,2)}</div>
                        <div class="subtitle">Hr</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Secs</div>
                      </div>
                    </div>
                    </div>
                    <div className="threeNanoOne">

                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Rain</div>
                      <div>{response1.days[3].precip}mm</div>
                      <div class="normals">
                        <div>{response2[2].rainfall.min}</div>
                        <div>{response2[2].rainfall.avg}</div>
                        <div>{response2[2].rainfall.max}</div>
                        <div class="subtitle">Min</div>
                        <div class="subtitle">Mean</div>
                        <div class="subtitle">Max</div>
                      </div>
                    </div>
                    <div class="kpi summary three" data-v-0f3d927f="">
                      <div class="subtitle">Precip%</div>
                      <div>{response1.days[3].precipprob}%</div>
                    </div>
                    </div>
                    </div>
                  </div>
                  <div class="description three" data-v-0f3d927f="">
                  {response1.days[3].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
