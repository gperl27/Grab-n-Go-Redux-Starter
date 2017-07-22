import React from 'react';

const renderItems = items => (
  items.map(item => <li>{item}</li>)
);

const ListItems = props => (
  <ul>
    {renderItems(props.books)}
  </ul>
);

export default ListItems;
