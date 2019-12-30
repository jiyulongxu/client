import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'
import OperationInput from '../input'
import OperationOutput from '../output'
import Recipients from '../recipients/container'

const EncryptOptions = () => (
  <Kb.Box2 direction="horizontal" fullWidth={true} style={styles.optionsContainer}>
    hi
  </Kb.Box2>
)

const OutputBar = () => (
  <Kb.Box2 direction="horizontal" fullWidth={true} style={styles.outputBarContainer}>
    <Kb.ButtonBar direction="row" style={styles.buttonBar}>
      <Kb.Button mode="Primary" label="Copy to clipboard" fullWidth={true}></Kb.Button>
      <Kb.Button mode="Primary" label="Download as TXT file" fullWidth={true}></Kb.Button>
    </Kb.ButtonBar>
  </Kb.Box2>
)

const Encrypt = () => {
  return (
    <Kb.Box2 direction="vertical" fullWidth={true} fullHeight={true} style={styles.container}>
      <Recipients />
      <Kb.Box2 direction="vertical" fullHeight={true}>
        <OperationInput placeholder="Write something or drop a file you want to encrypt" />
        <EncryptOptions />
        <OperationOutput placeholder="Output" />
        <Kb.Divider />
        <OutputBar />
      </Kb.Box2>
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      buttonBar: {
        height: Styles.globalMargins.large,
        minHeight: Styles.globalMargins.large,
      },
      container: {},
      optionsContainer: {
        ...Styles.padding(Styles.globalMargins.tiny),
        backgroundColor: Styles.globalColors.orange,
        height: Styles.globalMargins.large,
      },
      outputBarContainer: {
        ...Styles.padding(Styles.globalMargins.tiny),
      },
    } as const)
)

Encrypt.navigationOptions = {
  header: undefined,
  title: 'Crypto Toolkit • Encrypt',
}

export default Encrypt
