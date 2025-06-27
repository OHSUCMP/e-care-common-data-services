import { Resource } from 'fhir/r4';
import { fhirclient } from 'fhirclient/lib/types';

export const fhirOptions: fhirclient.FhirOptions = {
  pageLimit: 0,
};

export const notFoundResponse = (code?: string) => ({
  code,
  status: 'notfound',
  value: {
    stringValue: 'No Data Available',
    valueType: 'string',
  },
});

export const resourcesFromObject = (
  response: fhirclient.JsonObject
): Resource => {
  const entry: fhirclient.JsonObject = response?.entry ? response?.entry[0] : undefined;

  const resource: any = entry ? entry?.resource : undefined;

  if (resource && resource.resourceType === 'OperationOutcome') {
    return {} as any;
  }

  return resource;
};
