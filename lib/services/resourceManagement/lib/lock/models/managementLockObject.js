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
 * The lock information.
 *
 * @extends models['BaseResource']
 */
class ManagementLockObject extends models['BaseResource'] {
  /**
   * Create a ManagementLockObject.
   * @property {string} level The level of the lock. Possible values are:
   * NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users
   * are able to read and modify the resources, but not delete. ReadOnly means
   * authorized users can only read from a resource, but they can't modify or
   * delete it. Possible values include: 'NotSpecified', 'CanNotDelete',
   * 'ReadOnly'
   * @property {string} [notes] Notes about the lock. Maximum of 512
   * characters.
   * @property {array} [owners] The owners of the lock.
   * @property {string} [id] The resource ID of the lock.
   * @property {string} [type] The resource type of the lock -
   * Microsoft.Authorization/locks.
   * @property {string} [name] The name of the lock.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagementLockObject
   *
   * @returns {object} metadata of ManagementLockObject
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagementLockObject',
      type: {
        name: 'Composite',
        className: 'ManagementLockObject',
        modelProperties: {
          level: {
            required: true,
            serializedName: 'properties.level',
            type: {
              name: 'String'
            }
          },
          notes: {
            required: false,
            serializedName: 'properties.notes',
            type: {
              name: 'String'
            }
          },
          owners: {
            required: false,
            serializedName: 'properties.owners',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ManagementLockOwnerElementType',
                  type: {
                    name: 'Composite',
                    className: 'ManagementLockOwner'
                  }
              }
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagementLockObject;
