const _ = require('lodash');

const fruits = [{
    name: 'Apple',   color: 'Red' } ,
    { name: 'Strawberry', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Pineapple', color: 'Yellow' },
    { name: 'Grape', color: 'Black'
}];

console.log(JSON.stringify(fruits));

/**
 * Native Group By
 */
const groupByColor = _.groupBy(fruits, 'color');

console.log('groupByColor', JSON.stringify(groupByColor));