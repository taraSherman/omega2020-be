const router = require('express').Router();
const { connectionString } = require('./data-science-puzzles-model');

const { Pool, Client } = require('pg');

const pool = new Pool({
	connectionString: connectionString
});

pool.on('error', (err, client) => {
	console.error('Unexpected error on idle client', err)
	process.exit(-1)
})

const client = new Client({
	connectionString: connectionString
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
	client.end();
});

router.get('/', (req, res) => {
	pool.query('SELECT sudoku, solution, level, id FROM puzzle_table ORDER BY RANDOM() LIMIT 1', (q_err, q_res) => {
		if (q_err) {
			console.log('There was an error retrieving the sudoku puzzle from the server.');
			throw error;
		}
		if (q_res) {
			res.status(200).json(q_res.rows[0]);
		}
	});
});

router.get('/4x4/easy', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _4x4_puzzles WHERE level='Easy' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/4x4/medium', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _4x4_puzzles WHERE level='Medium' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/4x4/hard', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _4x4_puzzles WHERE level='Hard' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/6x6/easy', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _6x6_puzzles WHERE level='Easy' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/6x6/medium', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _6x6_puzzles WHERE level='Medium' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/6x6/hard', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM _6x6_puzzles WHERE level='Hard' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/saved', (req, res, next, puzzleDs) => {
	pool.query(
		`SELECT solution FROM puzzle_table WHERE id=${puzzleDs}`, (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/diabolical', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Diabolical' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/tough', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Tough' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/moderate', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Moderate' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/gentle', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM puzzle_table WHERE level='Gentle' ORDER BY RANDOM() LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/test', (req, res) => {
	pool.query(
		"SELECT sudoku, solution, level, id FROM puzzle_table WHERE id='5029' LIMIT 1", (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	pool.query(
		`SELECT sudoku, solution, level, id FROM puzzle_table where id = ${id}`, (q_err, q_res) => {
			if (q_err) {
				console.log('There was an error retrieving the sudoku puzzle from the server.');
				throw error;
			}
			if (q_res) {
				res.status(200).json(q_res.rows[0]);
			}
		});
});

module.exports = router;
