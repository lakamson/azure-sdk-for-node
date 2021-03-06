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
 * Probe of the application gateway.
 *
 * @extends models['SubResource']
 */
class ApplicationGatewayProbe extends models['SubResource'] {
  /**
   * Create a ApplicationGatewayProbe.
   * @property {string} [protocol] The protocol used for the probe. Possible
   * values include: 'Http', 'Https'
   * @property {string} [host] Host name to send the probe to.
   * @property {string} [path] Relative path of probe. Valid path starts from
   * '/'. Probe is sent to <Protocol>://<host>:<port><path>
   * @property {number} [interval] The probing interval in seconds. This is the
   * time interval between two consecutive probes. Acceptable values are from 1
   * second to 86400 seconds.
   * @property {number} [timeout] The probe timeout in seconds. Probe marked as
   * failed if valid response is not received with this timeout period.
   * Acceptable values are from 1 second to 86400 seconds.
   * @property {number} [unhealthyThreshold] The probe retry count. Backend
   * server is marked down after consecutive probe failure count reaches
   * UnhealthyThreshold. Acceptable values are from 1 second to 20.
   * @property {boolean} [pickHostNameFromBackendHttpSettings] Whether the host
   * header should be picked from the backend http settings. Default value is
   * false.
   * @property {number} [minServers] Minimum number of servers that are always
   * marked healthy. Default value is 0.
   * @property {object} [match] Criterion for classifying a healthy probe
   * response.
   * @property {string} [match.body] Body that must be contained in the health
   * response. Default value is empty.
   * @property {array} [match.statusCodes] Allowed ranges of healthy status
   * codes. Default range of healthy status codes is 200-399.
   * @property {string} [provisioningState] Provisioning state of the backend
   * http settings resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @property {string} [name] Name of the probe that is unique within an
   * Application Gateway.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   * @property {string} [type] Type of the resource.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationGatewayProbe
   *
   * @returns {object} metadata of ApplicationGatewayProbe
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayProbe',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayProbe',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          protocol: {
            required: false,
            serializedName: 'properties.protocol',
            type: {
              name: 'String'
            }
          },
          host: {
            required: false,
            serializedName: 'properties.host',
            type: {
              name: 'String'
            }
          },
          path: {
            required: false,
            serializedName: 'properties.path',
            type: {
              name: 'String'
            }
          },
          interval: {
            required: false,
            serializedName: 'properties.interval',
            type: {
              name: 'Number'
            }
          },
          timeout: {
            required: false,
            serializedName: 'properties.timeout',
            type: {
              name: 'Number'
            }
          },
          unhealthyThreshold: {
            required: false,
            serializedName: 'properties.unhealthyThreshold',
            type: {
              name: 'Number'
            }
          },
          pickHostNameFromBackendHttpSettings: {
            required: false,
            serializedName: 'properties.pickHostNameFromBackendHttpSettings',
            type: {
              name: 'Boolean'
            }
          },
          minServers: {
            required: false,
            serializedName: 'properties.minServers',
            type: {
              name: 'Number'
            }
          },
          match: {
            required: false,
            serializedName: 'properties.match',
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayProbeHealthResponseMatch'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayProbe;
