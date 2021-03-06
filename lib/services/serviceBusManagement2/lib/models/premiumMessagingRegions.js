/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Premium Messaging Region
 *
 * @extends models['ResourceNamespacePatch']
 */
class PremiumMessagingRegions extends models['ResourceNamespacePatch'] {
  /**
   * Create a PremiumMessagingRegions.
   * @property {object} [properties]
   * @property {string} [properties.code] Region code
   * @property {string} [properties.fullName] Full name of the region
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PremiumMessagingRegions
   *
   * @returns {object} metadata of PremiumMessagingRegions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PremiumMessagingRegions',
      type: {
        name: 'Composite',
        className: 'PremiumMessagingRegions',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'PremiumMessagingRegionsProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = PremiumMessagingRegions;
