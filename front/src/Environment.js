import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  let userToken = localStorage.getItem('USER_TOKEN')

  // Token validation
  if (typeof userToken !== 'string') {
    userToken = ''
  } else if (userToken === 'undefined') {
    userToken = ''
  }

  return fetch('http://127.0.0.1:8000/api/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `JWT ${userToken}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json()
  })
})

const environment = new Environment({
  network,
  store
})

export default environment
