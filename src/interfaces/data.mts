/**
 * @file Interfaces - Data
 * @module fst/interfaces/Data
 */

import type unist from 'unist'

/**
 * Info associated with fst nodes.
 *
 * This space is guaranteed to never be specified by unist or fst, but it
 * can be used in utilities and plugins to store custom data.
 *
 * @example
 *  declare module '@flex-development/fst' {
 *    interface Data {
 *      // `node.data.url` is typed as `string | undefined`
 *      url?: string | undefined
 *    }
 *  }
 *
 * @extends {unist.Data}
 */
interface Data extends unist.Data {}

export type { Data as default }
