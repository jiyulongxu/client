import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {
  result?: string
  placeholder?: string
}

const Output = (props: Props) => {
  return (
    <Kb.Box2 direction="vertical" fullHeight={true} fullWidth={true} style={styles.container}>
      <Kb.Box2 direction="vertical" fullWidth={true} style={styles.outputContainer}>
        <Kb.Text type="Body">{props.result ?? props.placeholder}</Kb.Text>
      </Kb.Box2>
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      container: Styles.platformStyles({
        isElectron: {
          ...Styles.globalStyles.flexGrow,
          ...Styles.padding(Styles.globalMargins.tiny),
          backgroundColor: Styles.globalColors.green,
          overflowY: 'auto',
        },
      }),
      outputContainer: {
        ...Styles.globalStyles.flexGrow,
      },
    } as const)
)

export default Output
