/**
 * @file Type Tests - AnyNode
 * @module fst/types/tests/unit-d/AnyNode
 */

import type TestSubject from '#types/any-node'
import type { Root } from '@flex-development/fst'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

describe('unit-d:types/AnyNode', () => {
  it('should equal InclusiveDescendant<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<InclusiveDescendant<Root>>()
  })
})
