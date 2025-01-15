/**
 * @file Type Tests - Parent
 * @module fst/nodes/tests/unit-d/Parent
 */

import type TestSubject from '#nodes/parent'
import type { Child, Node } from '@flex-development/fst'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [children: Child[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })
})
