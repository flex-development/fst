/**
 * @file Type Tests - Directory
 * @module fst/nodes/tests/unit-d/Directory
 */

import type * as TestSubject from '#nodes/directory'
import type {
  Data,
  Parent
} from '@flex-development/fst'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Directory', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DirectoryData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: DirectoryData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [type: "directory"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'directory'>()
  })

  describe('DirectoryData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
