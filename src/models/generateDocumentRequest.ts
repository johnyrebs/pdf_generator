/**
 * PDF Generator API 3.1.1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface GenerateDocumentRequest {
  id: number;
  name: string;
}

export const generateDocumentRequestSchema: Schema<GenerateDocumentRequest> = object(
  { id: ['id', number()], name: ['name', string()] }
);
