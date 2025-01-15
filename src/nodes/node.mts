/**
 * @file Nodes - Node
 * @module fst/nodes/Node
 */

import type { Data } from '@flex-development/fst'
import type unist from 'unist'

/**
 * Abstract fst node.
 *
 * @see {@linkcode unist.Node}
 *
 * @extends {unist.Node}
 */
interface Node extends unist.Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode Data}
   */
  data?: Data | undefined
}

export type { Node as default }
