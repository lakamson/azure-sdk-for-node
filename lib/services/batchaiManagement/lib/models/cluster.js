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
 * Contains information about a Cluster.
 *
 * @extends models['Resource']
 */
class Cluster extends models['Resource'] {
  /**
   * Create a Cluster.
   * @member {string} [vmSize] The size of the virtual machines in the cluster.
   * All virtual machines in a cluster are the same size. For information about
   * available VM sizes for clusters using images from the Virtual Machines
   * Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual
   * Machines (Windows). Batch AI service supports all Azure VM sizes except
   * STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and
   * STANDARD_DSV2 series).
   * @member {string} [vmPriority] dedicated or lowpriority. The default value
   * is dedicated. The node can get preempted while the task is running if
   * lowpriority is choosen. This is best suited if the workload is
   * checkpointing and can be restarted. Possible values include: 'dedicated',
   * 'lowpriority'. Default value: 'dedicated' .
   * @member {object} [scaleSettings] Desired scale for the Cluster.
   * @member {object} [scaleSettings.manual]
   * @member {number} [scaleSettings.manual.targetNodeCount] Default is 0. If
   * autoScaleSettings are not specified, then the Cluster starts with this
   * target.
   * @member {string} [scaleSettings.manual.nodeDeallocationOption] The default
   * value is requeue. Possible values include: 'requeue', 'terminate',
   * 'waitforjobcompletion', 'unknown'
   * @member {object} [scaleSettings.autoScale]
   * @member {number} [scaleSettings.autoScale.minimumNodeCount]
   * @member {number} [scaleSettings.autoScale.maximumNodeCount]
   * @member {number} [scaleSettings.autoScale.initialNodeCount]
   * @member {object} [virtualMachineConfiguration] Settings for OS image and
   * mounted data volumes.
   * @member {object} [virtualMachineConfiguration.imageReference]
   * @member {string} [virtualMachineConfiguration.imageReference.publisher]
   * @member {string} [virtualMachineConfiguration.imageReference.offer]
   * @member {string} [virtualMachineConfiguration.imageReference.sku]
   * @member {string} [virtualMachineConfiguration.imageReference.version]
   * @member {object} [nodeSetup] Setup to be done on all compute nodes in the
   * Cluster.
   * @member {object} [nodeSetup.setupTask]
   * @member {string} [nodeSetup.setupTask.commandLine]
   * @member {array} [nodeSetup.setupTask.environmentVariables]
   * @member {boolean} [nodeSetup.setupTask.runElevated]
   * @member {string} [nodeSetup.setupTask.stdOutErrPathPrefix] The path where
   * the Batch AI service will upload the stdout and stderror of setup task.
   * @member {object} [nodeSetup.mountVolumes]
   * @member {array} [nodeSetup.mountVolumes.azureFileShares] References to
   * Azure File Shares that are to be mounted to the cluster nodes.
   * @member {array} [nodeSetup.mountVolumes.azureBlobFileSystems] References
   * to Azure Blob FUSE that are to be mounted to the cluster nodes.
   * @member {array} [nodeSetup.mountVolumes.fileServers]
   * @member {array} [nodeSetup.mountVolumes.unmanagedFileSystems]
   * @member {object} [userAccountSettings] Settings for user account of
   * compute nodes.
   * @member {string} [userAccountSettings.adminUserName]
   * @member {string} [userAccountSettings.adminUserSshPublicKey]
   * @member {string} [userAccountSettings.adminUserPassword]
   * @member {object} [subnet] Specifies the identifier of the subnet.
   * @member {string} [subnet.id] The ID of the resource
   * @member {date} [creationTime] The creation time of the cluster.
   * @member {string} [provisioningState] Specifies the provisioning state of
   * the cluster. Possible value are: creating - Specifies that the cluster is
   * being created. succeeded - Specifies that the cluster has been created
   * successfully. failed - Specifies that the cluster creation has failed.
   * deleting - Specifies that the cluster is being deleted. Possible values
   * include: 'creating', 'succeeded', 'failed', 'deleting'
   * @member {date} [provisioningStateTransitionTime] The provisioning state
   * transition time of the cluster.
   * @member {string} [allocationState] Indicates whether the cluster is
   * resizing. Possible values are: steady and resizing. steady state indicates
   * that the cluster is not resizing. There are no changes to the number of
   * compute nodes in the cluster in progress. A cluster enters this state when
   * it is created and when no operations are being performed on the cluster to
   * change the number of compute nodes. resizing state indicates that the
   * cluster is resizing; that is, compute nodes are being added to or removed
   * from the cluster. Possible values include: 'steady', 'resizing'
   * @member {date} [allocationStateTransitionTime] The time at which the
   * cluster entered its current allocation state.
   * @member {array} [errors] Contains details of various errors on the cluster
   * including resize and node setup task. This element contains all the errors
   * encountered by various compute nodes during node setup.
   * @member {number} [currentNodeCount] The number of compute nodes currently
   * assigned to the cluster.
   * @member {object} [nodeStateCounts] Counts of various node states on the
   * cluster.
   * @member {number} [nodeStateCounts.idleNodeCount]
   * @member {number} [nodeStateCounts.runningNodeCount]
   * @member {number} [nodeStateCounts.preparingNodeCount]
   * @member {number} [nodeStateCounts.unusableNodeCount]
   * @member {number} [nodeStateCounts.leavingNodeCount]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Cluster
   *
   * @returns {object} metadata of Cluster
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Cluster',
      type: {
        name: 'Composite',
        className: 'Cluster',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            readOnly: true,
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
          vmSize: {
            required: false,
            serializedName: 'properties.vmSize',
            type: {
              name: 'String'
            }
          },
          vmPriority: {
            required: false,
            serializedName: 'properties.vmPriority',
            defaultValue: 'dedicated',
            type: {
              name: 'Enum',
              allowedValues: [ 'dedicated', 'lowpriority' ]
            }
          },
          scaleSettings: {
            required: false,
            serializedName: 'properties.scaleSettings',
            type: {
              name: 'Composite',
              className: 'ScaleSettings'
            }
          },
          virtualMachineConfiguration: {
            required: false,
            serializedName: 'properties.virtualMachineConfiguration',
            type: {
              name: 'Composite',
              className: 'VirtualMachineConfiguration'
            }
          },
          nodeSetup: {
            required: false,
            serializedName: 'properties.nodeSetup',
            type: {
              name: 'Composite',
              className: 'NodeSetup'
            }
          },
          userAccountSettings: {
            required: false,
            serializedName: 'properties.userAccountSettings',
            type: {
              name: 'Composite',
              className: 'UserAccountSettings'
            }
          },
          subnet: {
            required: false,
            serializedName: 'properties.subnet',
            type: {
              name: 'Composite',
              className: 'ResourceId'
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'creating', 'succeeded', 'failed', 'deleting' ]
            }
          },
          provisioningStateTransitionTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningStateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          allocationState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.allocationState',
            type: {
              name: 'Enum',
              allowedValues: [ 'steady', 'resizing' ]
            }
          },
          allocationStateTransitionTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.allocationStateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          errors: {
            required: false,
            serializedName: 'properties.errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BatchAIErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'BatchAIError'
                  }
              }
            }
          },
          currentNodeCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currentNodeCount',
            type: {
              name: 'Number'
            }
          },
          nodeStateCounts: {
            required: false,
            readOnly: true,
            serializedName: 'properties.nodeStateCounts',
            type: {
              name: 'Composite',
              className: 'NodeStateCounts'
            }
          }
        }
      }
    };
  }
}

module.exports = Cluster;