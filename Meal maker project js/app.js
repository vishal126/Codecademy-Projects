const menu = {
  _meal : '',
  _price : 0,
  set meal (mealToCheck) {
    if(typeof mealToCheck === 'string')
    {
      this._meal = mealToCheck;
    }
    else {
      console.log("enter string");
    }
  },
  set price (priceToCheck) {
    if(typeof priceToCheck === 'number')
    {
      this._price = priceToCheck;
    }
    else {
      console.log("enter number");
    }
  },
  get todaysSpecial() {
    if(this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    }
    else{
      return 'Meal or price was not set correctly!'
    }
  }
};

menu['_meal'] = 1;
menu['_price'] = 'hello';

console.log(menu);

menu.meal = 1;
menu.price = 'ee';
console.log(menu)

menu.meal = 'panipuri';
menu.price = 10;
console.log(menu)

//calling getter
console.log(menu.todaysSpecial)