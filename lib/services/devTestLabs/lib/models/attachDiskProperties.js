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
 * Properties of the disk to attach.
 *
 */
class AttachDiskProperties {
  /**
   * Create a AttachDiskProperties.
   * @member {string} [leasedByLabVmId] The resource ID of the Lab virtual
   * machine to which the disk is attached.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AttachDiskProperties
   *
   * @returns {object} metadata of AttachDiskProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AttachDiskProperties',
      type: {
        name: 'Composite',
        className: 'AttachDiskProperties',
        modelProperties: {
          leasedByLabVmId: {
            required: false,
            serializedName: 'leasedByLabVmId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AttachDiskProperties;