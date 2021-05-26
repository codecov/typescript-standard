const request = require('request');

const options = {
  url: 'https://codecov.io/api/gh/codecov/TypeScript-Standard',
  headers: {
    'token': process.env.API_KEY
  }
};

const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {

    console.log('Pinging Codecov\'s API..')
    const info = JSON.parse(body);
    commit_data = info['commits'][0]
    coverage_percentage = commit_data['totals']['c']

    // Coverage percentage should be CORRECT_COVERAGE environment variable on Travis || 77.77778
    if(coverage_percentage == process.env.CORRECT_COVERAGE){
        console.log('Success! Codecov\'s API returned the correct coverage percentage, '+ process.env.CORRECT_COVERAGE)
        return process.exit(0);
    }

  }else{
      console.log('Whoops, something is wrong D: Codecov did not return the correct coverage percentage. Coverage percentage should be '+ process.env.CORRECT_COVERAGE +' but Codecov returned '+coverage_percentage)

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
