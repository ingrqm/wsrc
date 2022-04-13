export enum QueryKey {
  userDetails = 'userDetails',
  userLogs = 'userLogs',
  usersList = 'usersList',
  statisticsDashboard = 'statisticsDashboard',
  resultDetails = 'resultDetails',
}

export enum MutationKey {
  signUp = 'signUpMutate',
  signOut = 'signOutMutate',
  signInToken = 'signInTokenMutate',
  signIn = 'signInMutate',
  verifyPasswordToken = 'verifyPasswordTokenMutate',
  passwordReset = 'passwordResetMutate',
  passwordRecovery = 'passwordRecoveryMutate',
  passwordRemind = 'passwordRemindMutate',
  activation = 'activationMutate',
  activationByUser = 'activationByUserMutate',
  userEdit = 'userEditMutate',
  userDelete = 'userDeleteMutate',
  startCompetition = 'startCompetition',
  startTest = 'startTest',
  endCompetition = 'endCompetition',
}
