import React from 'react';
import Count from './views/count'
import Person from './views/person'

export default class App extends React.Component {
  render () {
    return (
      <>
        <Count />
        <hr />
        <Person />
      </>
    );
  }
}
