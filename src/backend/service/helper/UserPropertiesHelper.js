/**
 * Created by dziadeusz on 12.11.16.
 */
module.exports = {
    getDisplayName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    },
    getTwitterName(name) {
        return '@' + name
    }
    ,
    getMembershipTime(joined) {
        return (Date.now() - joined) + ' seconds'
    }
}