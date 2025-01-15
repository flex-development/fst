/**
 * @file Type Tests - File
 * @module fst/nodes/tests/unit-d/File
 */

import type * as TestSubject from '#nodes/file'
import type { Data, Literal } from '@flex-development/fst'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/File', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FileData

  it('should extend Literal', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Literal>()
  })

  it('should match [data?: FileData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [name: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('name').toEqualTypeOf<string>()
  })

  it('should match [type: "file"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'file'>()
  })

  describe('FileData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
