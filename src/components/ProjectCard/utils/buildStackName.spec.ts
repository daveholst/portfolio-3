import { describe, expect, it } from 'vitest'
import { buildStackNames } from './buildStackNames'

// All tests within this suite will be run in parallel
describe.concurrent('build stack name strings from array', () => {
    it('single stack displays correctly', async () => {
        const stackArray = ['React']
        expect(buildStackNames(stackArray)).to.equal('React')
    })
    it('2 stack names displays correctly', async () => {
        const stackArray = ['React', 'Node.js']
        expect(buildStackNames(stackArray)).to.equal('React & Node.js')
    })
    it('3 stack names displays correctly', async () => {
        const stackArray = ['React', 'Node.js', 'AWS']
        expect(buildStackNames(stackArray)).to.equal('React, Node.js & AWS')
    })
    it('3+ stack names displays correctly', async () => {
        const stackArray = ['React', 'Node.js', 'AWS', 'TypeScript', 'Rust']
        expect(buildStackNames(stackArray)).to.equal(
            'React, Node.js, AWS, TypeScript & Rust'
        )
    })
})
