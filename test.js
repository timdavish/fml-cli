import test from 'ava';
import execa from 'execa';

test(async t => {
	const { stdout } = await execa('./index.js', ['--version']);
	t.true(stdout.length > 0);
});

test(async t => {
	const { stdout } = await execa('./index.js', ['-v']);
	t.true(stdout.length > 0);
});

test(async t => {
	const { stdout } = await execa('./index.js', ['--help']);
	t.true(stdout.length > 0);
});

test(async t => {
	const { stdout } = await execa('./index.js', ['-h']);
	t.true(stdout.length > 0);
});
