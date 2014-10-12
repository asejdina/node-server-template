'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Index'});
};

exports.history = (req, res)=>{
  res.render('home/history', {title: 'History'});
};

exports.today = (req, res)=>{
  res.render('home/today', {title: 'Today'});
};

exports.trainingType = (req, res)=>{
  res.render('home/training-type', {title: 'What Kind Of Hazmat Training?'});
};

exports.trainingWhen = (req, res)=>{
  res.render('home/training-when', {title: 'How Often Must You Be Trained?'});
};

exports.trainingWho = (req, res)=>{
  res.render('home/training-who', {title: 'Who Needs Hazmat Training?'});
};
