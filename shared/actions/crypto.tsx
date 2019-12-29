import commonTeamBuildingSaga, {filterForNs} from './team-building'

function* teamBuildingSaga() {
  yield* commonTeamBuildingSaga('crypto')

  // This action is used to hook into the TeamBuildingGen.addUsersToTeamSoFar action.
  // We want this so that we can figure out which user(s) havbe been selected and pass that result over to store.crypto
  // yield* Saga.chainAction2(TeamBuildingGen.addUsersToTeamSoFar, filterForNs('wallets', onTeamBuildingAdded))
}

function* cryptoSaga() {
  yield* teamBuildingSaga()
}

export default cryptoSaga
