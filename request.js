const request = require('request');

const options = {
  url: 'https://api.codecov.io/api/v2/github/codecov/repos/TypeScript-Standard/commits',
  headers: {
    'token': process.env.API_KEY
  }
};

const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {

    console.log('Pinging Codecov\'s API..')
    const info = JSON.parse(body);
    commit_data = info['results'][0]
    coverage_percentage = commit_data['totals']['coverage']
    console.log(`${coverage_percentage}`)

    // Coverage percentage should be CORRECT_COVERAGE environment variable on Travis || 77.77778
    if (coverage_percentage == process.env.CORRECT_COVERAGE) {
      console.log('Success! Codecov\'s API returned the correct coverage percentage, '+ process.env.CORRECT_COVERAGE)
      return process.exit(0);
    } else {
      console.log('Codecov did not return the correct coverage percentage. Coverage percentage should be '+ process.env.CORRECT_COVERAGE +' but Codecov returned '+coverage_percentage)
      return process.exit(1);
    }
  } else {
    console.log(`There was a problem calling the API. Please double check the url ${options.url}`)
    return process.exit(1);
  }
}

const napTime = (milliseconds) => {
  console.log('Waiting 60 seconds for report to upload before pinging API...')
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

napTime(60000).then(()=>{
  request(options, callback)
});
