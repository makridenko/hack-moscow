import {
  commitMutation,
  graphql
} from 'react-relay'

import environment from '../Environment'

const mutation = graphql`
  mutation TestMutation($input: TestMutationInput!) {
    testMutation(input: $input) {
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
        if (response.testMutation) {
          const username = response.testMutation.user.username
          callback(true, username)
        } else {
          callback(false, null)
        }
      },
      onError: err => console.error(err),
    }
  )
}
