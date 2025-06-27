import { Resource } from 'fhir/r4';
import { fhirclient } from 'fhirclient/lib/types';
import log from 'loglevel';


/**
 * Transform the FHIR response into an array of resources, removing any OperationOutcome resources.
 * @param response 
 * @returns 
 */
export const resourcesFrom = (response: fhirclient.JsonArray): Resource[] => {
    console.log('AEYresponse: ', response);
    log.info('AEYresponse: ' + response);
    const entries = response?.flatMap(r => (r as fhirclient.JsonObject)?.entry as fhirclient.JsonObject[] || []);
    return entries
        .map((entry: fhirclient.JsonObject) => entry?.resource as any)
        .filter(
            (resource: Resource) => resource.resourceType !== 'OperationOutcome'
        );
};