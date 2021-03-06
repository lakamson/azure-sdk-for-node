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
 * This type describes a volume resource.
 *
 */
class VolumeResourceDescription {
  /**
   * Create a VolumeResourceDescription.
   * @property {string} name Name of the Volume resource.
   * @property {string} [description] User readable description of the volume.
   * @property {string} [status] Status of the volume. Possible values include:
   * 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
   * @property {string} [statusDetails] Gives additional information about the
   * current status of the volume.
   * @property {object} [azureFileParameters] This type describes a volume
   * provided by an Azure Files file share.
   * @property {string} [azureFileParameters.accountName] Name of the Azure
   * storage account for the File Share.
   * @property {string} [azureFileParameters.accountKey] Access key of the
   * Azure storage account for the File Share.
   * @property {string} [azureFileParameters.shareName] Name of the Azure Files
   * file share that provides storage for the volume.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VolumeResourceDescription
   *
   * @returns {object} metadata of VolumeResourceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VolumeResourceDescription',
      type: {
        name: 'Composite',
        className: 'VolumeResourceDescription',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          statusDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.statusDetails',
            type: {
              name: 'String'
            }
          },
          provider: {
            required: true,
            isConstant: true,
            serializedName: 'properties.provider',
            defaultValue: 'SFAzureFile',
            type: {
              name: 'String'
            }
          },
          azureFileParameters: {
            required: false,
            serializedName: 'properties.azureFileParameters',
            type: {
              name: 'Composite',
              className: 'VolumeProviderParametersAzureFile'
            }
          }
        }
      }
    };
  }
}

module.exports = VolumeResourceDescription;
