/**
 * RisksList Page
 *
 * @author SA
 */
 import React, { Component } from 'react';
 import { withRouter } from 'react-router-dom';
 import { connect } from 'react-redux';
 import { Form, Grid, Row, Col } from 'react-bootstrap';
 import { FormattedMessage } from 'react-intl';
 import { injectIntl } from 'react-intl';
 import RisksListItem from './RisksListItem';

 import  * as RisksUtil from './RisksUtil';
 import goTo from '../../utils/HistoryUtil';
 import {resetStates} from '../../utils/StoreUtil';
 import Pagination from 'react-js-pagination';
 import logger, * as Utils from 'utils/Utils';

class RisksList extends Component {

  render() {

    const data =this.props.risksList;

    return (
      <Form>
        <Col xs={8} md={8} mdOffset={2} >
        <h2><FormattedMessage id="risksentry.head"/></h2>
        <h4><FormattedMessage id="risksentry.titlenew"/></h4>
        </Col>
        {data.length > 0 && (
        <Col xs={8} md={8} mdOffset={2} >
       
          {data.map((item, index) => {
            return (
                <RisksListItem item={item} key={index} />
            );
          })}
        </Col>
      )}
        <Row>
         
        </Row>
      </Form>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
  return {
      risksList: state.risksReducer.risksListAll,
      error: state.risksReducer.error,
    };
  };

  export default connect(mapStateToProps)(RisksList);
