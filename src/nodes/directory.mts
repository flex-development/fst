/**
 * @file Nodes - Directory
 * @module fst/nodes/Directory
 */

import type { Data, DirectoryContent, Parent } from '@flex-development/fst'

/**
 * Info associated with directories.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DirectoryData extends Data {}

/**
 * Node representing a directory.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Directory extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode DirectoryContent}
   */
  children: DirectoryContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DirectoryData}
   */
  data?: DirectoryData | undefined

  /**
   * Directory name (relative to parent).
   *
   * @example
   *  'src'
   */
  name: string

  /**
   * Node type.
   */
  type: 'directory'
}

export type { Directory as default, DirectoryData }
