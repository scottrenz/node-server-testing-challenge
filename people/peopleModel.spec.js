const People = require('./peopleModel.js');
const db = require('../data/dbConfig.js');

describe('people model', () => {
  beforeEach(async () => {
    await db('people').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('insert()', () => {
    it('should insert people into the db', async () => {
      // insert a record
      await People.insert({ name: 'Ralph Waldo' });
      await People.insert({ name: 'Joan Jones' });

      let people = await db('people');

      // assert the record was inserted
      expect(people).toHaveLength(2);
    });

    it('should insert people into the db', async () => {
      // insert a record
      const [id] = await People.insert({ name: 'Wanda Smith' });

      let person = await db('people')
        .where({ id })
        .first();

      // assert the record was inserted
      expect(person.name).toBe('Wanda Smith');
    });
  });

  describe('remove()', () => {
    it('should delete a person from the db', async () => {
      // delete a record
      // await People.insert({ name: 'Gaffer' });
      const [id] = await People.insert({ name: 'Joe Schmo' });
      await People.remove(id);
      const [id2] = await People.insert({ name: 'Ann Jones' });
      await People.remove(id2);

      let people = await db('people');

      // assert the record was inserted
      expect(people).toHaveLength(0);
    });

  });


});
