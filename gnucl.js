function gnucl(commandLineArguments, startAt) {
  startAt = startAt || 2;
  let opts = {};
  let args = [];
  for (let i = startAt; i < commandLineArguments.length; i++) {
    let arg = commandLineArguments[i];
    if (arg.startsWith('--')) {
      let { key, value } = splitOption(arg.substr(2));
      if (opts[key])
      opts[key] = addToExistingOption(opts[key], value);
      else
        opts[key] = value
    }
    else
      args.push(arg);
  }

  return { args, opts };
}


/*
  Split arounf 1st = sign, so the value could contain =
*/
function splitOption(str) {
  let idx = str.indexOf('=');
  if (idx > 0) {
    return {
      key: str.substr(0, idx),
      value: str.substr(idx+1)
    }
  } else {
    return {
      key: str,
      value: true
    }
  }
}


function addToExistingOption(existingOption, addValue) {
  if (!Array.isArray(existingOption))
    existingOption = [ existingOption ];
  existingOption.push(addValue);
  return existingOption;
}

module.exports = gnucl;
