export function buildStackNames(stacks: string[]) {
    if (stacks.length < 0) {
        return ''
    }

    if (stacks.length === 1) {
        return stacks[0]
    }

    if (stacks.length === 2) {
        return `${stacks[0]} & ${stacks[1]}`
    }

    if (stacks.length >= 3) {
        let formattedStackString = ''

        const lastIndex = stacks.length - 1
        const secondLastIndex = stacks.length - 2

        stacks.map((stackName, i) => {
            if (i === lastIndex) {
                return (formattedStackString += `${stackName}`)
            }
            if (i === secondLastIndex) {
                return (formattedStackString += `${stackName} & `)
            }
            formattedStackString += `${stackName}, `
        })

        return formattedStackString
    }
}
