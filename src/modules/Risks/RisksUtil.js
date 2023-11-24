/**
 * RisksUtils 
 *
 * @author SA
 */

import axios from 'axios';
const  apiRootUrl  = 'http://localhost:3000/risks.json' ;
let tempData = {} ;
export const gatewayUrl = process.env.GATEWAY_URL ? process.env.GATEWAY_URL : apiRootUrl;
const apiUri = '/api/v1/SettingValues';


export const loadRisksFile = (id) => {
 
    return fetch(gatewayUrl+apiUri)
            .then((res) => res.json())
            .then((data) => {
              tempData = data;
              return  data;
            })
      }


      // Function to search and replace a value by attribute name
function replaceValueByAttribute(object, attribute, newValue) {
  // Check if the attribute exists in the object
  if (object.hasOwnProperty(attribute)) {
    // Update the value of the attribute
    object[attribute] = Number(newValue);
    console.log(`Updated value for ${attribute}: ${newValue}`);
  } else {
    console.log(`Attribute ${attribute} not found in the object`);
  }
  return object;
}


export const saveRisksEntry = (
                    id,
                    item_value,
                    item_text,
                    item_new_value               
  ) => {

   // Example: Replace the value for "nebelgrenzwert_verkehrslenkung_ein"
   tempData = replaceValueByAttribute(tempData[0],item_text,item_new_value);
    
  const jsonParam = {
              'id': id,
              'beschlagsgrenzwert_verkehrslenkung_ein':tempData.beschlagsgrenzwert_verkehrslenkung_ein,
              'beschlagsgrenzwert_verkehrslenkung_aus':tempData.beschlagsgrenzwert_verkehrslenkung_aus,
              'nebelgrenzwert_verkehrslenkung_ein':tempData.nebelgrenzwert_verkehrslenkung_ein,
              'nebelgrenzwert_verkehrslenkung_aus':tempData.nebelgrenzwert_verkehrslenkung_aus,
              'sammelalarm_minimaldauer':tempData.sammelalarm_minimaldauer,
              'sammelalarm_datenfehler_minimaldauer':tempData.sammelalarm_datenfehler_minimaldauer,
              'beschlagsgrenzwert_lueftung_ein':tempData.beschlagsgrenzwert_lueftung_ein,
              'beschlagsgrenzwert_lueftung_aus':tempData.beschlagsgrenzwert_lueftung_aus,
              'nebelgrenzwert_lueftung_ein':tempData.nebelgrenzwert_lueftung_ein,
              'nebelgrenzwert_lueftung_aus':tempData.nebelgrenzwert_lueftung_aus,
              'taupunktdifferenz_freigabegrenzwert_ein':tempData.taupunktdifferenz_freigabegrenzwert_ein,
              'taupunktdifferenz_freigabegrenzwert_aus':tempData.taupunktdifferenz_freigabegrenzwert_aus,
              'laufzeit_lueftung_minimaldauer':tempData.laufzeit_lueftung_minimaldauer,
              'sperrung_lueftung_minimaldauer':tempData.sperrung_lueftung_minimaldauer,
              'aussen_innen_temperatur_gewichtung':tempData.aussen_innen_temperatur_gewichtung,
              'fahrzeugheizung_k1':tempData.fahrzeugheizung_k1,
              'fahrzeugheizung_k2':tempData.fahrzeugheizung_k2,
              'wassergehalt_h1':tempData.wassergehalt_h1,
              'wassergehalt_h2':tempData.wassergehalt_h2,
              'sensor_differenzgrenzwert_1':tempData.sensor_differenzgrenzwert_1,
              'sensor_differenzgrenzwert_2':tempData.sensor_differenzgrenzwert_2,
              'blockfehler_toleranzzeit':tempData.blockfehler_toleranzzeit,
              'summenfehler_toleranzzeit':tempData.summenfehler_toleranzzeit
          };
          console.log(JSON.stringify(jsonParam));
  const requestOption = {
    method: 'PUT', //POST also may work
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(jsonParam),
    mode: 'cors'
  };

  return fetch (gatewayUrl+apiUri + '/' + id ,requestOption);
}



  

