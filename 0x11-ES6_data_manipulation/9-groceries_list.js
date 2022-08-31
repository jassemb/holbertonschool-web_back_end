export default function groceriesList (name, quantity) {
    if (name.length === 0 || quantity.length === 0) {
        return {};
    }
    const groceries = new Map();
    groceries.set('Apples', 10);
    groceries.set('Tomatoes', 10);
    groceries.set('Pasta', 1);
    groceries.set('Rice', 1);
    groceries.set('Banana', 5);
  
    return groceries;
}