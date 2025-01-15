/**
 * @file Type Tests - Root
 * @module fst/nodes/tests/unit-d/Root
 */

import type * as TestSubject from '#nodes/root'
import type { Data, Directory, File, Parent } from '@flex-development/fst'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Root', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.RootData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Directory | File)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Directory | File)[]>()
  })

  it('should match [data?: RootData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [path: string]', () => {
    expectTypeOf<Subject>().toHaveProperty('path').toEqualTypeOf<string>()
  })

  it('should match [type: "root"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'root'>()
  })

  describe('RootData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
