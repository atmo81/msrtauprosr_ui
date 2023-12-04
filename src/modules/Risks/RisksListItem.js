/**
 * RisksListItem Page
 *
 * @author SA
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Container, Grid, Row, Col } from 'react-bootstrap';
import './Risks.css';
import goTo from '../../utils/HistoryUtil';
import { Button } from 'react-bootstrap/lib/InputGroup';

class RisksListItem extends Component {


  componentDidMount() {
  
      const hash = window.location.hash;
      const hashWithoutHashSymbol = hash.slice(1);
      const textqs = highlightAndRemove(decodeURIComponent('t_'+hashWithoutHashSymbol));
    }

    editValue =(e) => {
      const id = e.target.id;
      const value = document.getElementById('t_' + id).value;
      goTo('/entry#'+ id + '-' + value); 
    }


  render() {
    const { item } = this.props;
    return (
      <div>

        <table className="table psite-table" style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td><FormattedMessage id="risks.traffic.control" /></td>
              <td><FormattedMessage id="risks.tc.fogging.limit" /> <FormattedMessage id="risk.on" /></td>
              <td><input className="risks-input" type="text" id="t_beschlagsgrenzwert_verkehrslenkung_ein" name="" data-auto-id="from-input" value= {`${item.beschlagsgrenzwert_verkehrslenkung_ein}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="beschlagsgrenzwert_verkehrslenkung_ein" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tc.fogging.limit" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_beschlagsgrenzwert_verkehrslenkung_aus" name="" data-auto-id="from-input" value= {`${item.beschlagsgrenzwert_verkehrslenkung_aus}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="beschlagsgrenzwert_verkehrslenkung_aus" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tc.fog.limit" /> <FormattedMessage id="risk.on" /></td>
              <td><input className="risks-input" type="text" id="t_nebelgrenzwert_verkehrslenkung_ein" name="" data-auto-id="from-input" value={`${item.nebelgrenzwert_verkehrslenkung_ein}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="nebelgrenzwert_verkehrslenkung_ein" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
            <td></td>
              <td><FormattedMessage id="risks.tc.fog.limit" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_nebelgrenzwert_verkehrslenkung_aus" name="" data-auto-id="from-input" value= {`${item.nebelgrenzwert_verkehrslenkung_aus}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="nebelgrenzwert_verkehrslenkung_aus" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
            <td></td>
              <td><FormattedMessage id="risks.tc.collective.alarm" /> <FormattedMessage id="risks.tc.collective.alarm.minimaldauer" /> </td>
              <td><input className="risks-input" type="text" id="t_sammelalarm_minimaldauer" name="" data-auto-id="from-input" value= {`${item.sammelalarm_minimaldauer}Min.`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="sammelalarm_minimaldauer" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
            <td></td>
              <td><FormattedMessage id="risks.tc.collective.alarm" /> <FormattedMessage id="risks.tc.collective.alarm.minimaldauer" /> <FormattedMessage id="risks.tc.collective.alarm.minimaldauer.nch" /></td>
              <td><input className="risks-input" type="text" id="t_sammelalarm_datenfehler_minimaldauer" name="" data-auto-id="from-input" value= {`${item.sammelalarm_datenfehler_minimaldauer}Min.`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="sammelalarm_datenfehler_minimaldauer" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td><FormattedMessage id="risks.tunnel.ventilation" /></td>
              <td><FormattedMessage id="risks.tc.fogging.limit" /> <FormattedMessage id="risk.on" /></td>
              <td><input className="risks-input" type="text" id="t_beschlagsgrenzwert_lueftung_ein" name="" data-auto-id="from-input" value= {`${item.beschlagsgrenzwert_lueftung_ein}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="beschlagsgrenzwert_lueftung_ein" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tc.fogging.limit" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_beschlagsgrenzwert_lueftung_aus" name="" data-auto-id="from-input" value=  {`${item.beschlagsgrenzwert_lueftung_aus}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="beschlagsgrenzwert_lueftung_aus" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tc.fog.limit" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_nebelgrenzwert_lueftung_ein" name="" data-auto-id="from-input" value= {`${item.nebelgrenzwert_lueftung_ein}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="nebelgrenzwert_lueftung_ein" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tc.fog.limit" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_nebelgrenzwert_lueftung_aus" name="" data-auto-id="from-input" value= {`${item.nebelgrenzwert_lueftung_aus}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="nebelgrenzwert_lueftung_aus" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tv.dew.point.different" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_taupunktdifferenz_freigabegrenzwert_ein" name="" data-auto-id="from-input" value= {`${item.taupunktdifferenz_freigabegrenzwert_ein}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="taupunktdifferenz_freigabegrenzwert_ein" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tv.dew.point.different" /> <FormattedMessage id="risk.off" /></td>
              <td><input className="risks-input" type="text" id="t_taupunktdifferenz_freigabegrenzwert_aus" name="" data-auto-id="from-input" value=  {`${item.taupunktdifferenz_freigabegrenzwert_aus}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="taupunktdifferenz_freigabegrenzwert_aus" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tv.duration.ventualtion" /></td>
              <td><input className="risks-input" type="text" id="t_laufzeit_lueftung_minimaldauer" name="" data-auto-id="from-input" value= {`${item.laufzeit_lueftung_minimaldauer}Min.`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="laufzeit_lueftung_minimaldauer" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.tv.blocking.period" /></td>
              <td><input className="risks-input" type="text" id="t_sperrung_lueftung_minimaldauer" name="" data-auto-id="from-input" value=  {`${item.sperrung_lueftung_minimaldauer}Min`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="sperrung_lueftung_minimaldauer" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td><FormattedMessage id="risks.sensor.monitoring" /></td>
              <td><FormattedMessage id="risks.sm.dp.sensor.different.limit1" /></td>
              <td><input className="risks-input" type="text" id="t_sensor_differenzgrenzwert_1" name="" data-auto-id="from-input" value= {`${item.sensor_differenzgrenzwert_1}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="sensor_differenzgrenzwert_1" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.sm.dp.sensor.different.limit2" /></td>
              <td><input className="risks-input" type="text" id="t_" name="" data-auto-id="from-input" value= {`${item.sensor_differenzgrenzwert_2}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="sensor_differenzgrenzwert_2" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.sm.block.error" /></td>
              <td><input className="risks-input" type="text" id="t_blockfehler_toleranzzeit" name="" data-auto-id="from-input" value= {`${item.blockfehler_toleranzzeit}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="blockfehler_toleranzzeit" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
            <tr>
              <td></td>
              <td><FormattedMessage id="risks.sm.dp.totalerror" /></td>
              <td><input className="risks-input" type="text" id="t_summenfehler_toleranzzeit" name="" data-auto-id="from-input" value= {`${item.summenfehler_toleranzzeit}K`}  /></td>
              <td><button onClick={(e) => { this.editValue(e); }} id="summenfehler_toleranzzeit" type="submit" data-auto-id="home-click-login" className="risks-button">Andern</button></td>
            </tr>
           
          </tbody>
        </table>

        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

export const highlightAndRemove = (controlName) => {
  const input = document.querySelector(`input[id="${controlName}"]`);

  if (input) {
    // Add highlight class
    input.classList.add('highlight');

    // Remove highlight after 10 seconds
    setTimeout(() => {
      input.classList.remove('highlight');
    }, 3000);
  } else {
    console.error(`Input with name "${controlName}" not found.`);
  }
}

export default connect(mapStateToProps)(RisksListItem);
