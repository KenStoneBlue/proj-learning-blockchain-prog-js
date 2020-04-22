const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) 
bitcoin.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4');
bitcoin.createNewBlock(2389,'78s97d4', '345345345');
bitcoin.createNewBlock(2389,'345345345', '324lkj234lk2j34');
bitcoin.createNewBlock(2389,'324lkj234lk2j34', 'l23k4j2l3kj4');

// Blockchain.prototype.createNewTransaction = function (amount, sender, recipient)
bitcoin.createNewTransaction(100, 'NiuNiu00122299', 'Lauren999s99s99s9f');
bitcoin.createNewTransaction(300, 'Lauren999s99s99s9f', 'NiuNiu00122299');

bitcoin.createNewBlock(2389,'l23k4j2l3kj4', '2l3k4j2l3k4j2l34j');


console.log(bitcoin);
