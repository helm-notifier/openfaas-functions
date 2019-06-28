// Copyright (c) Alex Ellis 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information

const express = require('express');
const handler = require('../handler');

const app = express();

async function init() {
  await handler({ app });
  app.disable('x-powered-by');
  return app;
}

init();

module.exports = {
  init,
};
