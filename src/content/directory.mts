/**
 * @file Content - directory
 * @module fst/content/directory
 */

import type { Directory, File } from '@flex-development/fst'

/**
 * Union of registered fst nodes that can occur where directory content
 * is expected.
 *
 * To register custom fst nodes, augment {@linkcode DirectoryContentMap}. They
 * will be added to this union automatically.
 */
type DirectoryContent = DirectoryContentMap[keyof DirectoryContentMap]

/**
 * Registry of fst nodes that can occur where {@linkcode DirectoryContent} is
 * expected.
 *
 * This interface can be augmented to register custom nodes.
 *
 * @example
 *  declare module '@flex-development/fst' {
 *    interface DirectoryContentMap {
 *      custom: CustomNode
 *    }
 *  }
 */
interface DirectoryContentMap {
  directory: Directory
  file: File
}

export type { DirectoryContent, DirectoryContentMap }
