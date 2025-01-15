/**
 * @file Type Tests - directory
 * @module fst/content/tests/unit-d/directory
 */

import type * as TestSubject from '#content/directory'
import type NodeObject from '#tests/types/node-object'
import type { Directory, File } from '@flex-development/fst'

describe('unit-d:content/directory', () => {
  describe('DirectoryContent', () => {
    it('should equal DirectoryContentMap[keyof DirectoryContentMap]', () => {
      // Arrange
      type K = keyof TestSubject.DirectoryContentMap
      type Expect = TestSubject.DirectoryContentMap[K]

      // Expect
      expectTypeOf<TestSubject.DirectoryContent>().toEqualTypeOf<Expect>()
    })
  })

  describe('DirectoryContentMap', () => {
    it('should match NodeObject<Directory>', () => {
      expectTypeOf<TestSubject.DirectoryContentMap>()
        .toMatchTypeOf<NodeObject<Directory>>()
    })

    it('should match NodeObject<File>', () => {
      expectTypeOf<TestSubject.DirectoryContentMap>()
        .toMatchTypeOf<NodeObject<File>>()
    })
  })
})
