module.exports = {
    userInfo(user){
        return {
            id: user.id,
            username: user.name,
            displayName: user.name.charAt(0).toUpperCase() + user.name.slice(1),
            twitter: '@' + user.name,
            memberFor: (Date.now() - user.joined) + 'miliseconds'
        }
    }
}
