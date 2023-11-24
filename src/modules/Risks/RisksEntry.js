/**
 * RisksEntry Page
 *
 * @author SA
 */

  import React, { Component , useEffect } from 'react';
  import { withRouter } from 'react-router-dom';
  import { connect } from 'react-redux';
  import { Grid, Row, Col,Panel,Form,Button } from 'react-bootstrap';
  import { FormattedMessage } from 'react-intl';
  import { injectIntl } from 'react-intl';
  import goTo from '../../utils/HistoryUtil';
  import {resetStates} from '../../utils/StoreUtil';
  import logger, * as Utils from 'utils/Utils';
  import './Risks.css';
  import * as RisksUtil from './RisksUtil';
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  import {actionRisksList} from './RisksAction';
  import AppHeader from '../../app/AppHeader';
  
  class RisksEntry extends Component{

    state = {
      id: 1,
      item_text: '',
      item_value: 0,
      item_new_value: 0
    };

    constructor(props,context) {
      super(props);
      //this.state = {
      //  availableDate: new Date()
      //};
      this.handleChange = this.handleChange.bind(this);
      this.loadRisksItem = this.loadRisksItem.bind(this);
    }

    componentDidMount() {
      this.props.dispatch(actionRisksList())
      const hash = window.location.hash;

      // Remove the '#' character from the hash
      const hashWithoutHashSymbol = hash.slice(1);
  
      // Split the hash into an array using the '-' delimiter
      const hashValues = hashWithoutHashSymbol.split('-');
  
      // Decode the values
      const textqs = decodeURIComponent(hashValues[0]);
      const valueqs = decodeURIComponent(hashValues[1]);
      this.setState(() => ({
        item_value: valueqs,
        item_text: textqs
      }));   
      //Just for making sure if the page get refreshed the load event load the data into fields
      window.addEventListener('load', this.loadRisksItem);
    }

    loadRisksItem = (e) => {
      this.props.dispatch(actionRisksList())
      const hash = window.location.hash;

      // Remove the '#' character from the hash
      const hashWithoutHashSymbol = hash.slice(1);
  
      // Split the hash into an array using the '-' delimiter
      const hashValues = hashWithoutHashSymbol.split('-');
  
      // Decode the values
      const textqs = decodeURIComponent(hashValues[0]);
      const valueqs = decodeURIComponent(hashValues[1]);
      this.setState(() => ({
        item_value: valueqs,
        item_text: textqs
      }));   
     }

    handleChange = (e) => {
        const newval = e.target.value;
        this.setState(() => ({
          item_new_value: newval
        }) 
      );
    }


    
    cancelRisksEntry = (e) => {
      e.preventDefault();
      goTo('/home')
    }

    saveRisksEntry = (e) => {
      e.preventDefault();
      RisksUtil.saveRisksEntry(
                            this.state.id,
                            this.state.item_value,
                            this.state.item_text,
                            this.state.item_new_value
      ).then(response => {
       if (true || response.status == 200) {
         return response.json().then(data => {
          goTo('/home#' + this.state.item_text )
         });
       } else {
         logger('failed to call');
       }
     }).catch(err => {
       logger('login error = %s', err);
     });

    }

    render(){
        return (
          <Row>
          <div><AppHeader /></div>
          <Col xs={8} md={8}  >
          <Form  >
            <Grid>
              <Row>
                <Col xs={6} md={6} mdOffset={1} className='risks-entry-title'>
                 <div className='panel'>
                  <span ><FormattedMessage id="risksentry.inform" /></span>
                  </div>
                </Col>
                
              </Row>
              <br />
              <Row>
                <Col xs={2} md={1} mdOffset={1} className='risks-entry-title'>
                  <span><FormattedMessage id="risksentry.text" /></span>
                </Col>
                <Col xs={4} md={4} className='risks-entry-title'>
                  <input type="text" id="t_item_text" name="t_item_text" className="risks-data-item" disabled value={this.state.item_text} />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={2} md={1} mdOffset={1} className='risks-entry-title'>
                  <span><FormattedMessage id="risksentry.old.value" /></span>
                </Col>
                <Col xs={4} md={4}  className='risks-entry-title'>
                  <input type="text" id="t_item_value" name="t_item_value" className="risks-data-item" disabled value={this.state.item_value}/>
                </Col>
              </Row>
                <br />
              <Row>
                <Col xs={2} md={1} mdOffset={1} className='risks-entry-title'>
                  <span><FormattedMessage id="risksentry.new.value" /></span>
                </Col>
                <Col xs={4} md={4}  className='risks-entry-title'>
                  <input type="text" id="t_item_value_new" name="t_item_value_new" className="risks-data-item"  onChange={this.handleChange}/>
                </Col>
              </Row>
              
              <br />
              <Row>
                <Col xs={4} md={2} mdOffset={2}>
                  <Button type="submit"
                      data-auto-id="psiteentry-click-login"
                      className="save-button" style={{ marginTop: 5 }}
                      onClick={this.saveRisksEntry} >
                      <FormattedMessage id="risksentry.save" />
                  </Button>
                </Col>
              
                 <Col xs={4} md={2} >
                  <Button type="submit"
                      data-auto-id="psiteentry-click-login"
                      className="cancel-button" style={{ marginTop: 5 }}
                      onClick={this.cancelRisksEntry} >
                      <FormattedMessage id="risksentry.cancel" />
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Form>
          </Col>

          </Row>
      )}
  }
  const mapStateToProps = (state,ownProps) => {
     return{
        error: state.risksReducer.error,
     };
  };
  export default withRouter(injectIntl(connect(mapStateToProps)(RisksEntry)));
