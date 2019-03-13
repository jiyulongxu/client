// @flow
import * as Kb from '../common-adapters/mobile.native'
import * as React from 'react'
import * as Styles from '../styles'
import * as Shared from './shim.shared'
import {GatewayDest} from 'react-gateway'

export const shim = (routes: any) => Shared.shim(routes, shimNewRoute)

const shimNewRoute = (Original: any) => {
  // Wrap everything in a keyboard avoiding view (maybe this is opt in/out?)
  // Defer drawing until didfocus got called so transitions are faster
  class ShimmedNew extends React.PureComponent<any, {canDraw: boolean}> {
    static navigationOptions = Original.navigationOptions
    state = {canDraw: false}
    _didFocusSubscription = null
    _didFocus = () => {
      this.setState({canDraw: true})
      this._didFocusSubscription && this._didFocusSubscription.remove()
      this._didFocusSubscription = null
    }
    componentWillUnmount() {
      this._didFocusSubscription && this._didFocusSubscription.remove()
      this._didFocusSubscription = null
    }
    constructor(props) {
      super(props)
      this._didFocusSubscription = props.navigation.addListener('didFocus', this._didFocus)
    }
    render() {
      if (!this.state.canDraw) {
        return null
      }
      const body = <Original {...this.props} />
      const keyboardBody = (
        <Kb.NativeKeyboardAvoidingView
          style={styles.keyboard}
          behavior={Styles.isIOS ? 'padding' : undefined}
        >
          {body}
          <GatewayDest
            name="keyboard-avoiding-root"
            component={ViewForGatewayDest}
            pointerEvents="box-none"
            style={styles.gatewayDest}
          />
        </Kb.NativeKeyboardAvoidingView>
      )

      // don't make safe areas
      if (Original.navigationOptions && Original.navigationOptions.underNotch) {
        return keyboardBody
      }

      const safeKeyboardBody = (
        <Kb.NativeSafeAreaView style={styles.keyboard}>{keyboardBody}</Kb.NativeSafeAreaView>
      )

      return safeKeyboardBody
    }
  }
  return ShimmedNew
}
const ViewForGatewayDest = <T>(props: T) => <Kb.NativeView {...props} />
const styles = Styles.styleSheetCreate({
  gatewayDest: {height: '100%', position: 'absolute', top: 0, width: '100%'},
  keyboard: {
    flexGrow: 1,
    position: 'relative',
  },
})
