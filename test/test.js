var test = require('tape');
var gnucl = require('../gnucl.js');

const commandLine1 = 'node myProgram filename.txt --foo=bar --special anotherFilename.pdf'
const commandLine2 = 'node myProgram filename.txt --test=a=b --header=X-foo:foo --header=X-bar:bar anotherFilename.pdf'

test('basic ', function(t) {
   let parsed = gnucl(commandLine1.split(' '));

   t.equal(parsed.args.toString(), "filename.txt,anotherFilename.pdf");
   t.true(parsed.opts.special);
   t.equal(parsed.opts.foo, 'bar');

   t.end();
});

test('multi option v0.2.0 ', function(t) {
  let parsed = gnucl(commandLine2.split(' '));

  t.equal(parsed.args.toString(), "filename.txt,anotherFilename.pdf");
  t.equal(parsed.opts.header.toString(), 'X-foo:foo,X-bar:bar');
  t.equal(parsed.opts.test, 'a=b');

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


