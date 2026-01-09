import boxen from 'boxen'

//Classic
console.log(boxen('I am using my first external module!', {padding: 1,title:'Hurray!!!',titleAlignment:'center',borderStyle:'classic'}));

// SingleDouble
console.log(boxen('I am using my first external module!', {padding: 1,title:'Hurray!!!',titleAlignment:'center',borderStyle:'singleDouble'}));

//Round
console.log(boxen('I am using my first external module!', {padding: 1,title:'Hurray!!!',titleAlignment:'center',borderStyle:'round'}));

//BackgroundColor
console.log(boxen('I am using my first external module!', {padding: 1,title:'Hurray!!!',titleAlignment:'center',borderStyle:'round',backgroundColor:'yellow'}));
console.log(boxen('I am using my first external module!', {padding: 1,title:'Hurray!!!',titleAlignment:'center',borderStyle:'round',backgroundColor:'#ff0000'}));
