import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'
import OperationInput from '../input'
import OperationOutput from '../output'
import Recipients from '../recipients/container'

const Encrypt = () => {
  return (
    <Kb.Box2 direction="vertical" fullWidth={true} fullHeight={true} style={styles.operationContainer}>
      <Recipients />
      <OperationInput placeholder="Write something or drop a file you want to encrypt" />
      <OperationOutput />
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      operationContainer: {},
    } as const)
)

Encrypt.navigationOptions = {
  header: undefined,
  title: 'Crypto Toolkit • Encrypt',
}

export default Encrypt
