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
 * Represents a database transparent data encryption configuration.
 *
 * @extends models['ProxyResource']
 */
class TransparentDataEncryption extends models['ProxyResource'] {
  /**
   * Create a TransparentDataEncryption.
   * @property {string} [location] Resource location.
   * @property {string} [status] The status of the database transparent data
   * encryption. Possible values include: 'Enabled', 'Disabled'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of TransparentDataEncryption
   *
   * @returns {object} metadata of TransparentDataEncryption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransparentDataEncryption',
      type: {
        name: 'Composite',
        className: 'TransparentDataEncryption',
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
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          }
        }
      }
    };
  }
}

module.exports = TransparentDataEncryption;
