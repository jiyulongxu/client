import * as Container from '../../util/container'
import {appendEncryptRecipientsBuilder} from '../../actions/typed-routes'
import Recipients from '.'

export default Container.namedConnect(
  () => ({}),
  dispatch => ({
    onAddRecipients: () => dispatch(appendEncryptRecipientsBuilder()),
    onClearRecipients: () => {},
  }),
  (stateProps, dispatchProps, _) => ({
    onAddRecipients: dispatchProps.onAddRecipients,
    onClearRecipients: dispatchProps.onClearRecipients,
  }),
  'RecipientsContainer'
)(Recipients)
