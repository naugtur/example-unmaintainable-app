import ACTION_TYPE from '../ACTION_TYPE'

export default function listAction(){
  return {
    type: ACTION_TYPE.REQUEST_USERS,
    payload: fetch("/api/users").then((response) => (response.json()))
  }
}
