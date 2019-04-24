// @flow
import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Platform from '../../constants/platform'
import * as Styles from '../../styles'
import * as Window from '../../util/window-management'
import SyncingFolders from './syncing-folders'
import flags from '../../util/feature-flags'
// A mobile-like header for desktop

// Fix this as we figure out what this needs to be
type Props = any

const AppIconBox = Styles.styled(Kb.ClickableBox)({
  ':hover': {
    backgroundColor: Styles.globalColors.lightGrey,
  },
})

class Header extends React.PureComponent<Props> {
  render() {
    // TODO add more here as we use more options on the mobile side maybe
    const opt = this.props.options
    if (opt.headerMode === 'none') {
      return null
    }

    let title = null
    if (typeof opt.headerTitle === 'string') {
      title = (
        <Kb.Box2 direction="horizontal" style={{flexGrow: 1, marginLeft: Styles.globalMargins.xsmall}}>
          <Kb.Text style={{flexGrow: 1}} type="Header">
            {opt.headerTitle}
          </Kb.Text>
        </Kb.Box2>
      )
    } else if (typeof opt.headerTitle === 'function') {
      const CustomTitle = opt.headerTitle
      title = <CustomTitle>{opt.title}</CustomTitle>
    }

    let rightActions = null
    if (typeof opt.headerRightActions === 'function') {
      const CustomActions = opt.headerRightActions
      rightActions = <CustomActions />
    }

    let subHeader = null
    if (typeof opt.subHeader === 'function') {
      const CustomSubHeader = opt.subHeader
      subHeader = <CustomSubHeader />
    }

    let style = null
    if (opt.headerTransparent) {
      style = {position: 'absolute'}
    }

    let showDivider = true
    if (opt.headerHideBorder) {
      showDivider = false
    }

    return (
      <Kb.Box2 noShrink={true} direction="vertical" fullWidth={true}>
        {!!opt.headerBanner && opt.headerBanner}
        <Kb.Box2
          noShrink={true}
          direction="vertical"
          fullWidth={true}
          style={Styles.collapseStyles([styles.headerContainer, showDivider && styles.headerBorder, style])}
        >
          <Kb.Box2 direction="horizontal" fullWidth={true} style={styles.headerBack} alignItems="center">
            <Kb.Icon
              type="iconfont-arrow-left"
              style={this.props.allowBack ? styles.icon : styles.disabledIcon}
              color={this.props.allowBack ? Styles.globalColors.black_50 : Styles.globalColors.black_10}
              onClick={this.props.onPop}
            />
            {flags.kbfsOfflineMode && <SyncingFolders />}
            {!title && rightActions}

            {!Platform.isDarwin && (
              <Kb.Box2 direction="horizontal" gap="tiny">
                <AppIconBox direction="vertical" onClick={Window.minimizeWindow} style={styles.appIconBox}>
                  <Kb.Icon
                    type="iconfont-app-minimize"
                    style={styles.appIcon}
                    color={Styles.globalColors.black_50}
                  />
                </AppIconBox>
                <AppIconBox
                  direction="vertical"
                  onClick={Window.toggleMaximizeWindow}
                  style={styles.appIconBox}
                >
                  <Kb.Icon
                    type="iconfont-app-maximize"
                    style={styles.appIcon}
                    color={Styles.globalColors.black_50}
                  />
                </AppIconBox>
                <AppIconBox direction="vertical" onClick={Window.closeWindow} style={styles.appIconBox}>
                  <Kb.Icon
                    type="iconfont-app-close"
                    style={styles.appIcon}
                    color={Styles.globalColors.black_50}
                  />
                </AppIconBox>
              </Kb.Box2>
            )}
          </Kb.Box2>
          <Kb.Box2 direction="horizontal" fullWidth={true} style={styles.bottom}>
            <Kb.Box2 direction="horizontal" style={styles.flexOne}>
              {title}
            </Kb.Box2>
            {!!title && rightActions}
          </Kb.Box2>
        </Kb.Box2>
        {subHeader}
      </Kb.Box2>
    )
  }
}

const styles = Styles.styleSheetCreate({
  appIcon: Styles.platformStyles({
    isElectron: {
      ...Styles.desktopStyles.windowDraggingClickable,
      padding: Styles.globalMargins.xtiny,
      position: 'relative',
      top: 2,
    },
  }),
  appIconBox: {padding: 5},
  bottom: {minHeight: 40 - 1}, // for border
  disabledIcon: Styles.platformStyles({
    isElectron: {
      cursor: 'default',
      marginRight: 6,
    },
  }),
  flexOne: {
    flex: 1,
  },
  headerBack: Styles.platformStyles({
    isElectron: {
      alignItems: 'center',
      height: 40,
      justifyContent: 'space-between',
      padding: 12,
    },
  }),
  headerBorder: {
    borderBottomColor: Styles.globalColors.black_10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headerContainer: Styles.platformStyles({
    isElectron: {
      ...Styles.desktopStyles.windowDragging,
      alignItems: 'center',
    },
  }),
  icon: Styles.platformStyles({
    isElectron: {
      ...Styles.desktopStyles.windowDraggingClickable,
      marginRight: 6,
    },
  }),
})

export default Header
