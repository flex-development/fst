/**
 * @file Type Tests - Literal
 * @module fst/nodes/tests/unit-d/Literal
 */

import type TestSubject from '#nodes/literal'
import type { Node } from '@flex-development/fst'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:nodes/Literal', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [value: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('value')
      .toEqualTypeOf<Nilable<string>>()
  })
})
