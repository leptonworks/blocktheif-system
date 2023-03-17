'use strict';

/**
 * user-end service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-end.user-end');
