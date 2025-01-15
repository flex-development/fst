/**
 * @file Type Tests - Child
 * @module fst/types/tests/unit-d/Child
 */

import type TestSubject from '#types/child'
import type { AnyParent } from '@flex-development/fst'
import type { Children } from '@flex-development/unist-util-types'

describe('unit-d:types/Child', () => {
  it('should equal Children<AnyParent>[number]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Children<AnyParent>[number]>()
  })
})
