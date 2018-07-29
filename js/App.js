var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': 3434, 
  'X-Auth-Token': 'b7bd80529138cb9057f41f1b000a307c'
};

fetch(baseUrl + '/board', {
    method: 'GET',
    headers: myHeaders })
.then(function(resp) {
    return resp.json();
})
.then(function(resp) {
    console.log(resp);
    setupColumns(resp.columns);
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name);
        col.addCard(cardObj);
    });
}

function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}


// //zmienne, z których będziemy korzystać przy komunikacji z serwerem:

// var baseUrl = 'https://kodilla.com/pl/bootcamp-api';

// var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
// var myHeaders = {
//   'X-Client-Id': 'X-Client-Id',
//   'X-Auth-Token': 'X-Auth-Token',
//   'Content-Type': 'application/json; charset=utf-8'
// };

// //funkcja odpytująca serwer o zasób tablicy
// fetch(baseUrl + '/board', { headers: myHeaders })
//   .then(function(resp) {
//     return resp.json();
//   })
//   .then(function(resp) {
//     setupColumns(resp.columns);
//   });

//   //To, co funkcja musi wykonać, to stworzenie tylu kolumn, ile dostaliśmy w odpowiedzi z serwera, następnie zaś każdą z nich musi przypiąć do tablicy (tej, którą widzimy na stronie).

//   function setupColumns(columns) {
//     columns.forEach(function(column) {
// 		var col = new Column(column.id, column.name);
//       board.addColumn(col);
//       setupCards(col, column.cards);
//     });
// }

// // funkcję, która w taki sam sposób, jak ustawiała kolumny, ustawi nam karty.
// function setupCards(col, cards) {
// 	cards.forEach(function (card) {
//     var cardObj = new Card(card.id, card.name);
//   	col.addCard(cardObj);
// 	});
// }


// // OGÓLNA FUNKCJA
// // function randomString() {
// // 	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
// // 	var str = '', i;
// // 	for (i = 0; i < 10; i++) {
// // 	  str += chars[Math.floor(Math.random() * chars.length)];
// // 	}
// // 	return str;
// // }

// function generateTemplate(name, data, basicElement) {
//   	var template = document.getElementById(name).innerHTML;
//   	var element = document.createElement(basicElement || 'div');
  
//   	Mustache.parse(template);
//   	element.innerHTML = Mustache.render(template, data);
  
//   	return element;
// }

// // TWORZENIE NOWYCH EGZEMPLARZY KOLUMN
// var todoColumn = new Column('Do zrobienia');
// var doingColumn = new Column('W trakcie');
// var doneColumn = new Column('Skończone');

// // DODAWANIE KOLUMN DO TABLICY
// board.createColumn(todoColumn);
// board.createColumn(doingColumn);
// board.createColumn(doneColumn);

// // TWORZENIE NOWYCH EGZEMPLARZY KART
// var card1 = new Card('Nowe zadanie');
// var card2 = new Card('stworzyc tablice kanban');

// // DODAWANIE KART DO KOLUMN
// todoColumn.createCard(card1);
// doingColumn.createCard(card2);