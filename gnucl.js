function gnucl(commandLineArguments, startAt) {
  startAt = startAt || 2;
  let opts = {};
  let args = [];
  for (let i=startAt; i<commandLineArguments.length; i++) {
    let arg = commandLineArguments[i];
    if (arg.startsWith('--')) {
      let s = arg.substr(2).split('=');
      opts[s[0]] = (s.length > 1) ? s[1] : true;
    }
    else
      args.push(arg);
  }
  
  return { args, opts };
}

module.exports = gnucl;