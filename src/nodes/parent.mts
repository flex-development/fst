/**
 * @file Nodes - Parent
 * @module fst/nodes/Parent
 */

import type { Child, Node } from '@flex-development/fst'

/**
 * Abstract fst node that contains other fst nodes.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Parent extends Node {
  /**
   * List of children.
   *
   * @see {@linkcode Child}
   */
  children: Child[]
}

export type { Parent as default }
