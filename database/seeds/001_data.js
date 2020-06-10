
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('puzzles')
    .then(function () {
      // Inserts seed entries
      return knex('puzzles').insert([
        { id: 110, data: '.48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25.' }, //9x9
        { id: 200, data: '4......31......2' }, //4x4
        { id: 300, data: '.41256.6.4.....3.4...5624.362.2.6.4.' } //6x6
      ]);
    });
};
