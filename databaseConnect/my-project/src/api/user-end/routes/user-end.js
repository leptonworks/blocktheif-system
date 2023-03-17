'use strict';

/**
 * user-end router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-end.user-end');
