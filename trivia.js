const opentdb = require('opentdb-api');
 
opentdb.getToken().then(newToken => {
 
  var options = {
      amount: 2,
      category: 'science',
      difficulty: 'easy',
      type: 'multiple',
      token: newToken
  };
 
  opentdb.getTrivia(options).then(uniqueTrivia => {
    console.log(uniqueTrivia);
  });
});