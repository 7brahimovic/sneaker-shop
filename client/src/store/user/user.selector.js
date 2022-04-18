export const selectCurrentUser = (state) => {
    console.log('user selector fired')

    return state.user.currentUser
}