/**
 * RisksHome Page
 *
 * @author SA
 */

  import React, { Component } from 'react';
  import { withRouter } from 'react-router-dom';
  import { connect } from 'react-redux';
  import { Grid, Row, Col,Form } from 'react-bootstrap';
  import { FormattedMessage } from 'react-intl';
  import { injectIntl } from 'react-intl';
  import goTo from '../../utils/HistoryUtil';
  import {resetStates} from '../../utils/StoreUtil';
  import logger, * as Utils from 'utils/Utils';
  import {actionRisksList} from './RisksAction';
  import './Risks.css';
  import  * as SecurityUtil from '../Security/SecurityUtil';
  import RisksEntry from './RisksEntry';
  import RisksList from './RisksList';
  import AppHeader from '../../app/AppHeader';

  class RisksHome extends Component{

    constructor(props, context) {
       super(props);
       this.loadRisksList = this.loadRisksList.bind(this);
      
    }

    componentDidMount() {
          window.addEventListener('load', this.loadRisksList);
         
    }

    loadRisksList = (e) => {
      this.props.dispatch(actionRisksList())
    }
    render(){
        return (
        <Form  >
          <div><AppHeader /></div>
          <div><RisksList /></div>
        </Form>
      )}
  }
  const mapStateToProps = (state,ownProps) => {
    return{};
  };

  export default withRouter(injectIntl(connect(mapStateToProps)(RisksHome)));
