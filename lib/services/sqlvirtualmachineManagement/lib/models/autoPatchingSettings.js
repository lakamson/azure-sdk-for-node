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
 * Set a patching window during which Windows and SQL patches will be applied.
 *
 */
class AutoPatchingSettings {
  /**
   * Create a AutoPatchingSettings.
   * @property {boolean} [enable] Enable or disable autopatching on SQL virtual
   * machine.
   * @property {string} [dayOfWeek] Day of week to apply the patch on. Possible
   * values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
   * 'Saturday', 'Sunday'
   * @property {number} [maintenanceWindowStartingHour] Hour of the day when
   * patching is initiated. Local VM time.
   * @property {number} [maintenanceWindowDuration] Duration of patching.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AutoPatchingSettings
   *
   * @returns {object} metadata of AutoPatchingSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AutoPatchingSettings',
      type: {
        name: 'Composite',
        className: 'AutoPatchingSettings',
        modelProperties: {
          enable: {
            required: false,
            serializedName: 'enable',
            type: {
              name: 'Boolean'
            }
          },
          dayOfWeek: {
            required: false,
            serializedName: 'dayOfWeek',
            type: {
              name: 'Enum',
              allowedValues: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
            }
          },
          maintenanceWindowStartingHour: {
            required: false,
            serializedName: 'maintenanceWindowStartingHour',
            type: {
              name: 'Number'
            }
          },
          maintenanceWindowDuration: {
            required: false,
            serializedName: 'maintenanceWindowDuration',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AutoPatchingSettings;
