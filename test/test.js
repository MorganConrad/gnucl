var test = require('tape');
var gnucl = require('../gnucl.js');

const commandLine1 = 'node myProgram filename.txt --foo=bar --special anotherFilename.pdf'

test('basic ', function(t) {
   let parsed = gnucl(commandLine1.split(' '));

   t.equal(parsed.args.toString(), "filename.txt,anotherFilename.pdf");
   t.true(parsed.opts.special);
   t.equal(parsed.opts.foo, 'bar');

   t.end();
});

test('start earlier ', function(t) {
   let parsed = gnucl(commandLine1.split(' '), 1);

   t.equal(parsed.args.toString(), "myProgram,filename.txt,anotherFilename.pdf");
   t.true(parsed.opts.special);
   t.equal(parsed.opts.foo, 'bar');

   t.end();
});

test('start later', function(t) {
   let parsed = gnucl(commandLine1.split(' '), 4);

   t.equal(parsed.args.toString(), "anotherFilename.pdf");
   t.true(parsed.opts.special);
   t.false(parsed.opts.foo);

   t.end();
});


