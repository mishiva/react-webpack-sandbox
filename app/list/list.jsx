var React = require('react');
import './list.sass';

var List = React.createClass({
  getInitialState() {
    return {
      cats: []
    };
  },
  generateData() {
    var cats = []
    for (var i = 0; i <= 10; i++) {
      cats.push( { id: i, name: `Cat number ${i}` } )
    };
    return cats;
  },
  componentWillMount() {
    var cats = this.generateData()
    this.setState({ cats })
  },
  render() {
    var items = this.state.cats.map(function(cat, i) {
      return <ListItem cat={cat} key={i} />
    });
    return (
      <ul className='list'>{items}</ul>
    );
  }
});

var ListItem = React.createClass({
  render() {
    return (
      <li className='list-item'>
        <span>Id: {this.props.cat.id}</span>
        <span>Name: {this.props.cat.name}</span>
      </li>
    );
  }
});

export default List;
