/**
 * API Factory Documentation
 * 
 * This factory creates standardized CRUD operations for your API endpoints.
 * It provides a flexible way to create API methods with custom configurations.
 */

// api/factory/api-factory.js
import { handleApiRequest } from "../api-handler";

const DEFAULT_CONFIG = {
  basePath: '/api',
  defaultParams: {
    limit: 50,
    page: 1,
  },
  cache: 'force-cache',
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Creates query string from parameters
 * @param {Object} defaultParams - Default query parameters
 * @param {Object} customParams - Custom query parameters
 * @returns {string} Formatted query string
 */
const createQueryString = (defaultParams = {}, customParams = {}) => {
  const params = {
    ...defaultParams,
    ...customParams,
  };
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== undefined)
    )
  ).toString();
};


export const createCrudApi = (entity, customConfig = {}) => {
  const config = {
    ...DEFAULT_CONFIG,
    ...customConfig,
    defaultParams: {
      ...DEFAULT_CONFIG.defaultParams,
      ...customConfig.defaultParams
    },
  };

  const baseUrl = `${config.basePath}/${entity}`;

  return {
    // Get all records
    getAll: async ({ token, params = {}, options = {} } = {}) => {
      const queryString = createQueryString(config.defaultParams, params);
      return handleApiRequest("GET", `${baseUrl}?${queryString}`, {
        token,
        cache: config.cache,
        ...options
      });
    },

    // Get single record
    getById: async ({ token, id, options = {} } = {}) => {
      return handleApiRequest("GET", `${baseUrl}/${id}`, {
        token,
        cache: config.cache,
        ...options
      });
    },

    // Create record
    create: async ({ token, data, options = {} } = {}) => {
      return handleApiRequest("POST", baseUrl, {
        token,
        body: data,
        ...options
      });
    },

    // Update record
    update: async ({ token, id, data, options = {} } = {}) => {
      return handleApiRequest("PUT", `${baseUrl}/${id}`, {
        token,
        body: data,
        ...options
      });
    },

    // Delete record
    delete: async ({ token, id, options = {} } = {}) => {
      return handleApiRequest("DELETE", `${baseUrl}/${id}`, {
        token,
        ...options
      });
    },

    ...customConfig.customMethods
  };
};