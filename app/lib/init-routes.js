'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var training = traceur.require(__dirname + '/../routes/training.js');

  app.get('/', dbg, home.index);
  app.get('/history', dbg, home.history);
  app.get('/today', dbg, home.today);
  app.get('/training-type', dbg, home.trainingType);
  app.get('/training-when', dbg, home.trainingWhen);
  app.get('/training-who', dbg, home.trainingWho);

  app.get('/training/function-specific', dbg, training.functionSpecific);
  app.get('/training/general-awareness', dbg, training.generalAwareness);
  app.get('/training/in-depth-security', dbg, training.inDepthSecurity);
  app.get('/training/safety', dbg, training.safety);
  app.get('/training/security-awareness', dbg, training.securityAwareness);

  console.log('Routes Loaded');
  fn();
}
