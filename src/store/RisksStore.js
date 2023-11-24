/**
 * Risks Store
 *
 * @author SA
 */

 import logger from 'utils/Utils';
 import * as StoreUtil from '../utils/StoreUtil';

 const initState = {
 	error: '',
 	result: '',
 	risksListAll: {},
};

 const searchState = {
      id: '',
      beschlagsgrenzwert_verkehrslenkung_ein: '',
      beschlagsgrenzwert_verkehrslenkung_aus: '',
      nebelgrenzwert_verkehrslenkung_ein: '',
      nebelgrenzwert_verkehrslenkung_aus: '',
      sammelalarm_minimaldauer: '',
      sammelalarm_datenfehler_minimaldauer: '',
      beschlagsgrenzwert_lueftung_ein: '',
      beschlagsgrenzwert_lueftung_aus: '',
      nebelgrenzwert_lueftung_ein: '',
      nebelgrenzwert_lueftung_aus: '',
      taupunktdifferenz_freigabegrenzwert_ein: '',
      taupunktdifferenz_freigabegrenzwert_aus: '',
      laufzeit_lueftung_minimaldauer: '',
      sperrung_lueftung_minimaldauer: '',
      aussen_innen_temperatur_gewichtung: '',
      fahrzeugheizung_k1: '',
      fahrzeugheizung_k2: '',
      wassergehalt_h1: '',
      wassergehalt_h2: '',
      sensor_differenzgrenzwert_1: '',
      sensor_differenzgrenzwert_2: '',
      blockfehler_toleranzzeit: '',
      summenfehler_toleranzzeit: ''
};

 // actions
const LOAD_RISKS_LIST_ACTION = 'LOAD_RISKS_LIST_ACTION';
const LOAD_RISKS_SELECT_ACTION = 'LOAD_RISKS_SELECT_ACTION';
const CLEAR_RISKS_FORM_ACTION = 'CLEAR_RISKS_FORM_ACTION';

const createLoadRisksListAction = () => {
  return {
    type: LOAD_RISKS_LIST_ACTION,
  };
};

const selectLoadRisksAction = () => {
  return {
      type: LOAD_RISKS_SELECT_ACTION,
  };
};



const clearRisksFormAction = () => {
  return {
    type: CLEAR_RISKS_FORM_ACTION,
  };
};

 // reducer
 export const risksReducer = (state = initState, action) => {

   switch (action.type) {
     case LOAD_RISKS_LIST_ACTION:
         let risksList = [ ...state.risksListAll];
         return {...state,	risksListAll: action.result,error: ","	};
      case LOAD_RISKS_SELECT_ACTION:
          let risk = [ ...state.risks];
          return {...state,	risk: action.result,error: ","	};
      case CLEAR_RISKS_FORM_ACTION:
          return searchState;
      default:
         return state
     };
 }

 // dispatchers

 export const loadRisksList = () => {
   StoreUtil.dispatch(createLoadRisksListAction());
 };

 export const loadRisksSelect = () => {
   StoreUtil.dispatch(selectLoadRisksAction());
 };

 export const clearRisksForm = () => {
   StoreUtil.dispatch(clearRisksFormAction());
 };
