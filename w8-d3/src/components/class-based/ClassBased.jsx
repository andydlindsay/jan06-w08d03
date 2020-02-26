import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello',
      cats: ['gremlin', 'loki', 'boris']
    };
  }

  render() {
    return (
      <div>
        I'm in a class!! Wiff all my friends!
        <p>{ this.state.cats }</p>
      </div>
    );
  }
}

export default ClassBased;
