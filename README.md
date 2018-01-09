[![Build Status](https://secure.travis-ci.org/MorganConrad/gnucl.png)](http://travis-ci.org/MorganConrad/gnucl)
[![License](http://img.shields.io/badge/license-MIT-A31F34.svg)](https://github.com/MorganConrad/gnucl)
[![NPM Downloads](http://img.shields.io/npm/dm/gnucl.svg)](https://www.npmjs.org/package/gnucl)
[![Known Vulnerabilities](https://snyk.io/test/github/morganconrad/gnucl/badge.svg)](https://snyk.io/test/github/morganconrad/gnucl)
[![Coverage Status](https://coveralls.io/repos/github/MorganConrad/gnucl/badge.svg)](https://coveralls.io/github/MorganConrad/gnucl)



# gnucl
Brain-dead simple GNU style command line argument parser

### Installation

`$ npm install MorganConrad/gnucl`

### Option parsing

```js
const gnucl = require('gnucl');
let parsed = gnucl(process.argv, numberToIgnoreDefaultsTo2);
// or
let {args, opts} = gnucl(process.argv);
...
parsed.opts = a map of the GNU-like options
parsed.args = an array of remaining arguments
```

### Example

```js
$node myProgram filename.txt --foo=bar --special anotherFilename.pdf

let parsed = gnucl(process.argv);
parsed.args = ['filename.txt', 'anotherFilename.pdf']
parsed.opts = { foo:"bar", special:true }
```

By default, **gnucl** ignores the first two arguments.  Pass a second argument to change.




