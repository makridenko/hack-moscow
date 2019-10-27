import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql, QueryRenderer } from 'react-relay'
import { withRouter } from 'react-router-dom'
import environment from '../../Environment'

import PropTypes from 'prop-types'

const UserInfoBlockQuery = graphql`
query UserInfoBlockQuery($username: String!){
  userInfos(user_Username: $username) {
    edges {
      node {
        id
        firstName
        lastName
        experience
      }
    }
  }
}
`

const BlockStyled = styled.div`
   height: 584px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   background: #FFFFFF;
   border-radius: 10px;
   padding: 16px;
   margin: 30px 0;
   background-image: url('/images/Paper.svg');

   .name {
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 8px;
   }

   .grade {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #686868;
   }

   .avatar {
     text-align: center;
    img {
      width: 80%;
      mix-blend-mode: multiply;
    }
   }

   .rating {
      font-weight: bold;
      font-size: 20px;

     .yourlvl {
        font-size: 14px;
     }

     .count {
        font-size: 50px;
        line-height: 37px;
     }

     .bar {
        width: 100%;
        height: 25px;
        margin-top: 8px;

        background: #FF8087;
        border-radius: 10px;
     }

     .rating-strip {
        height: 25px;
        background: #C55057;
        border-radius: 10px;
     }
   }
   
   @media(max-width: 600px) {
      height: 130px;
      flex-direction: row;
      margin: 15px 0;

      .name-header {
          flex: 1;
          
           .name {
              font-size: 24px;
           }
           
           .grade {
              font-size: 16px;
           }
      }
      
      .avatar {
        flex: 1;
          width: 80px;
        img {
        width: auto;
          height: 100%;
          mix-blend-mode: multiply;
        }
       }
   
    .rating {
       flex: 1;
       text-align: right;
       
       font-size: 18px;
     
       .yourlvl {
          font-size: 12px;
       }
       
       .count {
          font-size: 36px;
          line-height: 37px;
       }
       
       .bar {
          display: none;
        }
    }
`

class UserInfoBlock extends Component {
  setAvatar = (rating) => {
    if (rating < 15) {
      return '/avatars/15.png'
    } else if (rating < 100) {
      return '/avatars/12.png'
    }
  }

  getExp = (exp) => {
    localStorage.setItem('USER_EXP', exp)
  }

  render () {
    const username = this.props.match.params.username
    return (
      <BlockStyled>
        <QueryRenderer
          environment={environment}
          query={UserInfoBlockQuery}
          variables={{username: username}}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              console.log(props.userInfos)
              return (
                props.userInfos.edges.map(({ node }) => {
                  const avaURL = this.setAvatar(node.experience)
                  this.getExp(node.experience)
                  return (
                    <React.Fragment key={node.id}>
                      <div className='name-header'>
                        <div className='name'>{`${node.firstName} ${node.lastName}`}</div>
                        <div className='grade'>5 класс</div>
                      </div>
                      <div className='avatar'><img src={avaURL} alt='12' /></div>
                      <div className='rating'>
                        <span сlassName='yourlvl'>Твой опыт</span><br />
                        <span className='count'>{node.experience}</span>
                        <div className='bar'><div className='rating-strip' style={{ width: node.rating + '%' }}></div></div>
                      </div>
                    </React.Fragment>)
                }))
            }

            return <div>Loading</div>
          }}
        />
      </BlockStyled>
    )
  }
}

UserInfoBlock.propTypes = {
  match: PropTypes.object.isRequired
}

export default withRouter(UserInfoBlock)
