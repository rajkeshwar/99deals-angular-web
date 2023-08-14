/*
 * @Author: rajkeshwar.pd@gmail.com 
 * @Date: 2023-08-14 07:20:47 
 * @Last Modified by: rajkeshwar.pd@gmail.com
 * @Last Modified time: 2023-08-14 07:29:02
 */

import { snakeCase } from 'lodash-es';

export const makeLinks = (links:string[] = []) => {
  return links.map((link) => ({ route: snakeCase(link), text: link }));
};
