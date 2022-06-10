import React, { useState, useEffect } from "react";
import { FormattedMessage } from 'react-intl';
import Grafica from './grafica.js';

function Lista() {


    let [series, setSeries] = useState([]);

    let urlAPI = ""
    let navLanguage = navigator.language.split("-")[0];
    
    if(navLanguage === "es"){
        urlAPI = "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json"
    }
    else{
        urlAPI = "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json"
    }


    useEffect(() => {

        if(!navigator.onLine) {
            if(localStorage.getItem("series") === null) {
                setSeries("Cargando series...");
            } else {
                setSeries(JSON.parse(localStorage.getItem("series")));
            }
        } else {
            fetch(urlAPI).then((res) => res.json()).then((data) => {
                setSeries(data);
                localStorage.setItem("series", JSON.stringify(series));
            });
        }
    });


    return (
        <div>
         <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col"><FormattedMessage id="Name"/></th>
        <th scope="col"><FormattedMessage id="Channel"/></th>
        <th scope="col"><FormattedMessage id="Description"/></th>
      </tr>
    </thead>
    <tbody>
    {series.map((c) => {
                            return(
                                    <tr>
                                        <th scope="row"><FormattedMessage id={c.id}/></th>
                                        <th scope="row"><FormattedMessage id={c.name}/></th>
                                        <td><FormattedMessage id={c.channel}/></td>
                                        <td><FormattedMessage id={c.description}/></td>
                                    </tr> 
                            );
                        })}
    </tbody>
  </table>
  <div>
      {/* <Grafica series={series}/> */}
  </div>
  </div>
    );
  }
  
  export default Lista;