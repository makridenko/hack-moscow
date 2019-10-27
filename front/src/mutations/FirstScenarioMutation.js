import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation FirstScenarioMutation($input: FirstScenarioMutationInput!) {
    firstScenario(input: $input) {
      user {
        username
      }
    }
}
`

export default (lessonId, tasks, callback) => {
  const variables = {
    input: {
      lessonId,
      tasks,
    }
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        if (response.firstScenario) {
          console.log(response.firstScenario.user.username);
          const username = response.firstScenario.user.username
          callback(true, username)
        } else {
          callback(false, null)
        }
      },
      onError: err => console.error(err),
    }
  )
}
