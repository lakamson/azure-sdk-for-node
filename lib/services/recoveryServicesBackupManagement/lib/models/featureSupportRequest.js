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
 * Base class for feature request
 *
 */
class FeatureSupportRequest {
  /**
   * Create a FeatureSupportRequest.
   * @member {string} featureType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of FeatureSupportRequest
   *
   * @returns {object} metadata of FeatureSupportRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FeatureSupportRequest',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'featureType',
          clientName: 'featureType'
        },
        uberParent: 'FeatureSupportRequest',
        className: 'FeatureSupportRequest',
        modelProperties: {
          featureType: {
            required: true,
            serializedName: 'featureType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FeatureSupportRequest;
