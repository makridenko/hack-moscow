import {
  commitMutation,
  graphql,
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation SignInUserMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        username
      }
    }

    tokenAuth(username: $username, password: $password) {
      token
    }

  }
`;

export default (username, password, callback) => {
  const variables = {
    username,
    password,
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        if (response.login) {
          const id = response.login.user.id;
          const username = response.login.user.username;
          const token = response.tokenAuth.token;
          callback(true, id, token, username);
        } else {
          callback(false, 0, '', '');
        }
      },
      onError: err => console.error(err),
    },
  );
}
