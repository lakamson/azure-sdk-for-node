/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the TroubleshootingResult class.
 * @constructor
 * Troubleshooting information gained from specified resource.
 *
 * @member {date} [startTime] The start time of the troubleshooting.
 *
 * @member {date} [endTime] The end time of the troubleshooting.
 *
 * @member {string} [code] The result code of the troubleshooting.
 *
 * @member {array} [results] Information from troubleshooting.
 *
 */
class TroubleshootingResult {
  constructor() {
  }

  /**
   * Defines the metadata of TroubleshootingResult
   *
   * @returns {object} metadata of TroubleshootingResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TroubleshootingResult',
      type: {
        name: 'Composite',
        className: 'TroubleshootingResult',
        modelProperties: {
          startTime: {
            required: false,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          results: {
            required: false,
            serializedName: 'results',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TroubleshootingDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'TroubleshootingDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TroubleshootingResult;