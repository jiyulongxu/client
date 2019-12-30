import * as TeamBuildingGen from '../actions/team-building-gen'
import * as Types from '../constants/types/crypto'
import * as Constants from '../constants/crypto'
import * as Container from '../util/container'
import {editTeambuildingDraft} from './team-building'
import {teamBuilderReducerCreator} from '../team-building/reducer-helper'

const initialState: Types.State = Constants.makeState()

type Actions = TeamBuildingGen.Actions

export default Container.makeReducer<Actions, Types.State>(initialState, {
  // Encrypt: Handle team building when selecting keybase users
  ...teamBuilderReducerCreator<Types.State>(
    (draftState: Container.Draft<Types.State>, action: TeamBuildingGen.Actions) => {
      const val = editTeambuildingDraft('crypto', draftState.teamBuilding, action)
      if (val !== undefined) {
        draftState.teamBuilding = val
      }
    }
  ),
})
