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
 * @summary LiveOutputListResult
 * The LiveOutput list result.
 */
class LiveOutputListResult extends Array {
  /**
   * Create a LiveOutputListResult.
   * @property {number} [odatacount] The number of result.
   * @property {string} [odatanextLink] Th link to the next set of results. Not
   * empty if value contains incomplete list of Live Outputs.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of LiveOutputListResult
   *
   * @returns {object} metadata of LiveOutputListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LiveOutputListResult',
      type: {
        name: 'Composite',
        className: 'LiveOutputListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LiveOutputElementType',
                  type: {
                    name: 'Composite',
                    className: 'LiveOutput'
                  }
              }
            }
          },
          odatacount: {
            required: false,
            serializedName: '@odata\\.count',
            type: {
              name: 'Number'
            }
          },
          odatanextLink: {
            required: false,
            serializedName: '@odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LiveOutputListResult;
