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
 * Response of an Operation status.
 *
 */
class OperationStatus {
  /**
   * Create a OperationStatus.
   * @property {string} [code] Status Code. Possible values include: 'Failed',
   * 'FAILED', 'Success'
   * @property {string} [message] Status details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationStatus
   *
   * @returns {object} metadata of OperationStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationStatus',
      type: {
        name: 'Composite',
        className: 'OperationStatus',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationStatus;
