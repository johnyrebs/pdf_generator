/**
 * PDF Generator API 3.1.1Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface Editor {
  heightMultiplier: number;
}

export const editorSchema: Schema<Editor> = object({
  heightMultiplier: ['heightMultiplier', number()],
});
