import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
class App extends React.Component {
  constructor(props)
  {

    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' },
        { id: 5, value: 'Tomatoes', qty: 10, unit: 'pcs' },
        { id: 6, value: 'Apple Juice', qty: 5, unit: 'ltr' },
        { id: 7, value: 'Fishsticks', qty: 12, unit: 'x' },
        { id: 8, value: 'Cheese', qty: 2, unit: 'x'}
      ]
    };

  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
    </div>
  }
}

export default App;