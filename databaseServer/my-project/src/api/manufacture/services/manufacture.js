'use strict';

/**
 * manufacture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manufacture.manufacture');
