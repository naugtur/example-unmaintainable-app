import ACTION_TYPE from "../ACTION_TYPE"

export default function fetchUser(id) {
    return {
        type: ACTION_TYPE.REQUEST_USER,
        payload: fetch("/api/users/" + id).then((response) => (response.json()))
    }
}
