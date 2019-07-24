const request = require('request');

const options = {
  url: 'https://codecov.io/api/gh/codecov/TypeScript-Standard',
  headers: {
    'token': process.env.API_KEY
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    commit_data = info['commits'][0]
    coverage_percentage = commit_data['totals']['c']
    
    // Coverage percentage should be CORRECT_COVERAGE environment variable on Travis || 77.77778
    if(coverage_percentage == process.env.CORRECT_COVERAGE){
        eturn process.exit(0);
    }

  }else{
    return process.exit(1);
  }
}

request(options, callback);