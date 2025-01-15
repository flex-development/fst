/**
 * @file Nodes - File
 * @module fst/nodes/File
 */

import type { Data, Literal } from '@flex-development/fst'

/**
 * Info associated with files.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FileData extends Data {}

/**
 * Node representing a file.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface File extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FileData}
   */
  data?: FileData | undefined

  /**
   * File name (relative to parent).
   *
   * @example
   *  'index.mts'
   */
  name: string

  /**
   * Node type.
   */
  type: 'file'

  /**
   * File contents.
   *
   * @override
   */
  value: string | null | undefined
}

export type { File as default, FileData }
