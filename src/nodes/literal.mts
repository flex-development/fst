/**
 * @file Nodes - Literal
 * @module fst/nodes/Literal
 */

import type { Node } from '@flex-development/fst'

/**
 * Abstract fst node containing the smallest possible value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * Plain value.
   */
  value: string | null | undefined
}

export type { Literal as default }
