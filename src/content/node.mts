/**
 * @file Content - node
 * @module fst/content/node
 */

import type {
  DirectoryContentMap,
  Root
} from '@flex-development/fst'

/**
 * Union of registered fst nodes.
 *
 * To register custom fst nodes, augment {@linkcode NodeMap}. They will be
 * added to this union automatically.
 */
type FstNode = NodeMap[keyof NodeMap]

/**
 * Registry of fst nodes.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/fst' {
 *    interface NodeMap {
 *      customNode: CustomNode
 *    }
 *  }
 *
 * @extends {DirectoryContentMap}
 */
interface NodeMap extends DirectoryContentMap {
  root: Root
}

export type { FstNode, NodeMap }
