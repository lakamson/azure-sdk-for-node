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
 * An action group object for the body of patch operations.
 *
 */
class ActionGroupPatchBody {
  /**
   * Create a ActionGroupPatchBody.
   * @member {object} [tags] Resource tags
   * @member {boolean} [enabled] Indicates whether this action group is
   * enabled. If an action group is not enabled, then none of its actions will
   * be activated. Default value: true .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ActionGroupPatchBody
   *
   * @returns {object} metadata of ActionGroupPatchBody
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ActionGroupPatchBody',
      type: {
        name: 'Composite',
        className: 'ActionGroupPatchBody',
        modelProperties: {
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
          enabled: {
            required: false,
            serializedName: 'properties.enabled',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ActionGroupPatchBody;