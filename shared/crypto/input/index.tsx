import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {
  placeholder: string
}

const Input = (props: Props) => {
  return (
    <Kb.Box2 direction="vertical" fullWidth={true} fullHeight={true}>
      <Kb.NewInput
        multiline={true}
        autoFocus={true}
        hideBorder={true}
        placeholder={props.placeholder}
        containerStyle={styles.inputStyle}
      />
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      inputStyle: {
        ...Styles.globalStyles.fullHeight,
      },
    } as const)
)

export default Input
