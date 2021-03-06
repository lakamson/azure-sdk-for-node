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
 * Routing message
 *
 */
class RoutingMessage {
  /**
   * Create a RoutingMessage.
   * @member {string} [body] Body of routing message
   * @member {object} [appProperties] App properties
   * @member {object} [systemProperties] System properties
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoutingMessage
   *
   * @returns {object} metadata of RoutingMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoutingMessage',
      type: {
        name: 'Composite',
        className: 'RoutingMessage',
        modelProperties: {
          body: {
            required: false,
            serializedName: 'body',
            type: {
              name: 'String'
            }
          },
          appProperties: {
            required: false,
            serializedName: 'appProperties',
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
          systemProperties: {
            required: false,
            serializedName: 'systemProperties',
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

module.exports = RoutingMessage;
