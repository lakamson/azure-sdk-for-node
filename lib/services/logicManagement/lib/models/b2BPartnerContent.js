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
 * The B2B partner content.
 *
 */
class B2BPartnerContent {
  /**
   * Create a B2BPartnerContent.
   * @member {array} [businessIdentities] The list of partner business
   * identities.
   */
  constructor() {
  }

  /**
   * Defines the metadata of B2BPartnerContent
   *
   * @returns {object} metadata of B2BPartnerContent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'B2BPartnerContent',
      type: {
        name: 'Composite',
        className: 'B2BPartnerContent',
        modelProperties: {
          businessIdentities: {
            required: false,
            serializedName: 'businessIdentities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BusinessIdentityElementType',
                  type: {
                    name: 'Composite',
                    className: 'BusinessIdentity'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = B2BPartnerContent;