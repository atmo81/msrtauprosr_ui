import {loadRisksFile,deleteRisksEntry,saveRisksEntry} from './RisksUtil';

const LOAD_RISKS_LIST_ACTION = 'LOAD_RISKS_LIST_ACTION';
const SAVE_RISKS_ACTION = 'SAVE_RISKS_ACTION';
const DELETE_RISKS_ACTION = 'DELETE_RISKS_ACTION';

export const actionRisksList = (id) => {
  return async (dispatch, getState) => {
    let json = null;
    try{
      json = await loadRisksFile(1);
      console.log('Sending a list of Risks' , json);
      dispatch(dispatchRisksList(json));
    } catch (error) {
      return;
    }
  }
}


export const actionSaveRisksEntry = (
                              id,
                              beschlagsgrenzwert_verkehrslenkung_ein,
                              beschlagsgrenzwert_verkehrslenkung_aus,
                              nebelgrenzwert_verkehrslenkung_ein,
                              nebelgrenzwert_verkehrslenkung_aus,
                              sammelalarm_minimaldauer,
                              sammelalarm_datenfehler_minimaldauer,
                              beschlagsgrenzwert_lueftung_ein,
                              beschlagsgrenzwert_lueftung_aus,
                              nebelgrenzwert_lueftung_ein,
                              nebelgrenzwert_lueftung_aus,
                              taupunktdifferenz_freigabegrenzwert_ein,
                              taupunktdifferenz_freigabegrenzwert_aus,
                              laufzeit_lueftung_minimaldauer,
                              sperrung_lueftung_minimaldauer,
                              aussen_innen_temperatur_gewichtung,
                              fahrzeugheizung_k1,
                              fahrzeugheizung_k2,
                              wassergehalt_h1,
                              wassergehalt_h2,
                              sensor_differenzgrenzwert_1,
                              sensor_differenzgrenzwert_2,
                              blockfehler_toleranzzeit,
                              summenfehler_toleranzzeit
                                   ) => {
  return async (dispatch, getState) => {
    let json = null;
    try{
      json = await saveRisksEntry(
        id,
        beschlagsgrenzwert_verkehrslenkung_ein,
        beschlagsgrenzwert_verkehrslenkung_aus,
        nebelgrenzwert_verkehrslenkung_ein,
        nebelgrenzwert_verkehrslenkung_aus,
        sammelalarm_minimaldauer,
        sammelalarm_datenfehler_minimaldauer,
        beschlagsgrenzwert_lueftung_ein,
        beschlagsgrenzwert_lueftung_aus,
        nebelgrenzwert_lueftung_ein,
        nebelgrenzwert_lueftung_aus,
        taupunktdifferenz_freigabegrenzwert_ein,
        taupunktdifferenz_freigabegrenzwert_aus,
        laufzeit_lueftung_minimaldauer,
        sperrung_lueftung_minimaldauer,
        aussen_innen_temperatur_gewichtung,
        fahrzeugheizung_k1,
        fahrzeugheizung_k2,
        wassergehalt_h1,
        wassergehalt_h2,
        sensor_differenzgrenzwert_1,
        sensor_differenzgrenzwert_2,
        blockfehler_toleranzzeit,
        summenfehler_toleranzzeit
      );
      console.log('Sending a list of Risks' , json);
      dispatch(dispatchSaveRisksEntry(json));
    } catch (error) {
      return;
    }
  }
}

export const actionDeleteRisksEntry = (id) => {
  return async (dispatch, getState) => {
    let json = null;
    try{
      json = await deleteRisksEntry(id);
      console.log('Delete a Risks' , json);
      dispatch(dispatchDeleteRisksEntry(json));
    } catch (error) {
      return;
    }
  }
}

export const dispatchDeleteRisksEntry = (responseJson) => {
    console.log('dispatchDelete >> Delete Risks ' + responseJson);
  return {
    type: DELETE_RISKS_ACTION,
    result: responseJson,
  }
}

export const dispatchSaveRisksEntry = (responseJson) => {
  return {
    type: SAVE_RISKS_ACTION,
    result:responseJson,
  }
}
export const dispatchRisksList = (responseJson) => {
  console.log('dispatchRisksList >> List of risks ' + responseJson);
  return {
    type:LOAD_RISKS_LIST_ACTION ,
    result: responseJson,
  };
};
