/**
 * @file Nodes - Root
 * @module fst/nodes/Root
 */

import type {
  DirectoryContent,
  DirectoryData,
  Parent
} from '@flex-development/fst'

/**
 * Info associated with file system roots.
 *
 * @see {@linkcode DirectoryData}
 *
 * @extends {DirectoryData}
 */
interface RootData extends DirectoryData {}

/**
 * Node representing the root of a file system.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Root extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode DirectoryContent}
   */
  children: DirectoryContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RootData}
   */
  data?: RootData | undefined

  /**
   * Path to root directory.
   */
  path: string

  /**
   * Node type.
   */
  type: 'root'
}
export type { Root as default, RootData }
