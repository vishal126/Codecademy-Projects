import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';

import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  const visibleAllItems = getFilteredItems(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm = {state.searchTerm}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleAllItems}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}