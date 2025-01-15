/**
 * @file Type Tests - node
 * @module fst/content/tests/unit-d/node
 */

import type * as TestSubject from '#content/node'
import type { AnyNode } from '@flex-development/fst'
import type { Type } from '@flex-development/unist-util-types'

describe('unit-d:content/node', () => {
  describe('FstNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      // Arrange
      type K = keyof TestSubject.NodeMap
      type Expect = TestSubject.NodeMap[K]

      // Expect
      expectTypeOf<TestSubject.FstNode>().toEqualTypeOf<Expect>()
    })
  })

  describe('NodeMap', () => {
    it('should register all fst nodes', () => {
      // Arrange
      type Subject = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Subject>().toEqualTypeOf<AnyNode>()
      expectTypeOf<keyof TestSubject.NodeMap>().toEqualTypeOf<Type<AnyNode>>()
    })
  })
})
