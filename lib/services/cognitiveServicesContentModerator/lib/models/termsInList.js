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
 * Terms in list Id passed.
 *
 */
class TermsInList {
  /**
   * Create a TermsInList.
   * @property {string} [term] Added term details.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TermsInList
   *
   * @returns {object} metadata of TermsInList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TermsInList',
      type: {
        name: 'Composite',
        className: 'TermsInList',
        modelProperties: {
          term: {
            required: false,
            serializedName: 'Term',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TermsInList;
