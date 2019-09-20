const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(person) {
  return db('people').insert(person, 'id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
return  db.raw('delete from people where id='+id)
}

function getAll() {
  return db('people');
}

function findById(id) {
  return null;
}
