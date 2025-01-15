/**
 * @file Type Aliases - AnyNode
 * @module fst/types/AnyNode
 */

import type { Root } from '@flex-development/fst'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

/**
 * Union of nodes that can occur in fst.
 */
type AnyNode = InclusiveDescendant<Root>

export type { AnyNode as default }
