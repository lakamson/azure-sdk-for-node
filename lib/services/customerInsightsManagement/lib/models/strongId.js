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

/**
 * Property/Properties which represent a unique ID.
 *
 */
class StrongId {
  /**
   * Create a StrongId.
   * @member {array} keyPropertyNames The properties which make up the unique
   * ID.
   * @member {string} strongIdName The Name identifying the strong ID.
   * @member {object} [displayName] Localized display name.
   * @member {object} [description] Localized descriptions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StrongId
   *
   * @returns {object} metadata of StrongId
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StrongId',
      type: {
        name: 'Composite',
        className: 'StrongId',
        modelProperties: {
          keyPropertyNames: {
            required: true,
            serializedName: 'keyPropertyNames',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          strongIdName: {
            required: true,
            serializedName: 'strongIdName',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
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
          description: {
            required: false,
            serializedName: 'description',
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
          }
        }
      }
    };
  }
}

module.exports = StrongId;