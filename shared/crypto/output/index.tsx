import * as React from 'react'
import * as Kb from '../../common-adapters'

type Props = {
  result?: string
}

const Input = (props: Props) => {
  return <Kb.Box2 direction="vertical">{props.result}</Kb.Box2>
}

export default Input
