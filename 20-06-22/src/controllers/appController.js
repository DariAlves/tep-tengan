const Api = require('../models/Api');

const home = (request, response) => {
  return response.render('index');
};

const api = (request, response) => {
  return response.render('api', { Api });
};

module.exports = {
  home,
  api,
};
