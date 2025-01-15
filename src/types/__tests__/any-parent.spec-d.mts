/**
 * @file Type Tests - AnyParent
 * @module fst/types/tests/unit-d/AnyParent
 */

import type TestSubject from '#types/any-parent'
import type { Root } from '@flex-development/fst'
import type { Parents } from '@flex-development/unist-util-types'

describe('unit-d:types/AnyParent', () => {
  it('should equal Parents<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Parents<Root>>()
  })
})
