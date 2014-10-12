'use strict';

exports.functionSpecific = (req, res)=>{
  res.render('training/function-specific', {title: 'Function Specific Training'});
};

exports.generalAwareness = (req, res)=>{
  res.render('training/general-awareness', {title: 'General Awareness/Familiarization Training'});
};

exports.inDepthSecurity = (req, res)=>{
  res.render('training/in-depth-security', {title: 'In Depth Security Training'});
};

exports.safety = (req, res)=>{
  res.render('training/safety', {title: 'Safety Training'});
};

exports.securityAwareness = (req, res)=>{
  res.render('training/security-awareness', {title: 'Security Awareness Training'});
};
