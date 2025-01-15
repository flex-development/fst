/**
 * @file Type Tests - Data
 * @module fst/interfaces/tests/unit-d/Data
 */

import type TestSubject from '#interfaces/data'
import type unist from 'unist'

describe('unit-d:interfaces/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Data>()
  })
})
