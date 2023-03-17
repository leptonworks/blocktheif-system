'use strict';

/**
 * user-end controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-end.user-end');
