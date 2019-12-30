import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {
  placeholder: string
}

const Input = (props: Props) => {
  return (
    <Kb.Box2 direction="vertical" fullWidth={true} fullHeight={true} style={styles.container}>
      <Kb.NewInput
        multiline={true}
        autoFocus={false}
        hideBorder={true}
        growAndScroll={true}
        padding="tiny"
        placeholder={props.placeholder}
        containerStyle={styles.inputContainer}
      />
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      container: {
        ...Styles.globalStyles.flexGrow,
      },
      inputContainer: {
        // We want the immediate container not to overflow, so we tell it be height: 100% to match the parent
        ...Styles.globalStyles.fullHeight,
        alignItems: 'stretch',
      },
    } as const)
)

export default Input
