/**
 * Home Page
 *
 * @author SA
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';

import globalMessages from '../../messages.global';
import AppHeader from '../../app/AppHeader';
import goTo from '../../utils/HistoryUtil';
import { resetStates } from '../../utils/StoreUtil'
import './Assignments.css';
import logger, * as Utils from 'utils/Utils';


class Assignments extends Component {
    render() {
        return (

            <form className="assignments-form" >
                <div><AppHeader /></div>
                <Grid className="assignments-page">
                    <Row>
                        <Col xs={12} md={4} mdOffset={2} className='home-title'>
                            <span><FormattedMessage id="home.title" /></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} className='assignments-fixed-height' >

                        </Col>
                        <Col xs={12} md={12} >
                            <table className='assignments-table'>
                                <thead>
                                    <td></td>
                                    <td>Messquerschnitt Nr.</td>
                                    <td>1</td>
                                    <td></td>
                                    <td></td>
                                    <td>2</td>
                                    <td></td>
                                    <td></td>
                                    <td>3</td>
                                    <td></td>
                                    <td>4</td>
                                    <td></td>
                                    <td>5</td>
                                    <td></td>
                                    <td>6</td>
                                    <td></td>
                                    <td>7</td>
                                    <td></td>
                                    <td>8</td>
                                    <td></td>
                                    <td>9</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>10</td>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><label>2.80</label></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D203
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td><button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                        D106
                                    </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D111
                                        </button>
                                    </td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D214
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D219
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D222
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>2.00</label></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D202
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td><button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                        D105
                                    </button>
                                    </td>
                                    <td></td>
                                    <td>
                                    <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                        D107
                                    </button>
                                    </td>
                                    <td>
                                    <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                        D108
                                    </button>
                                    </td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D110
                                        </button>
                                    </td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D213
                                        </button>
                                    </td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D215
                                        </button>
                                    </td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D216
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D218
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D221
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>1.20</label></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D201
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td><button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                        D104
                                    </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D109
                                        </button>
                                    </td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D212
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>X</td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D218
                                        </button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="assignments-button" style={{ marginTop: 20 }} onClick={(e) => { this.navigate(e); }}>
                                            D220
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>

                </Grid>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};


export default withRouter(injectIntl(connect(mapStateToProps)(Assignments)));

