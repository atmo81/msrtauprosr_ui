
/**
 * ParkingSiteHome Page
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
  import './test.css';
  import TestUtils from './TestUtil';

class TestPage extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return{};
};

export default withRouter(injectIntl(connect(mapStateToProps)(TestPage)));
