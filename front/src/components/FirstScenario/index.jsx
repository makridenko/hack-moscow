import React from 'react'
import styled from 'styled-components'
import {
  Button
} from 'reactstrap'

const BlockStyled = styled.div`
   height: 584px;
   margin: 30px 0;

   background: #FFFFFF;
   border-radius: 10px;

   .topics-block {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     padding: 25px 70px;
   }

   .header {
      width: 100%;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 10px;
   }

   .topic-item {
      width: 100%;
      height: 63px;
      margin: 10px 0;
      padding: 0 30px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      background: #2665C5;
      border-radius: 10px;
      color: #FFFFFF;

      transition: background 0.2s;

      &:hover {
        background: #3e7cda;
        text-decoration: none;
      }

      &:active {
          background: #2158ab;
      }

     .title {
        font-weight: bold;
        font-size: 18px;
     }

     .link {
        color: #ffffff;
        text-decoration: underline;
        font-weight: 300;
        font-size: 18px;
     }
   }

`

const FirstScenario = () => {
  return (
    <BlockStyled>
      <div className="topics-block">
        <div className="header">
          Привет, искатель приключений!
        </div>
        <p>
          Прежде, чем ты начнешь прокачивать свои скиллы,
          нам нужно проверить тебя. Ты готов?
        </p>
        <Button color="success" href="/scenario/first">Погнали!</Button>
      </div>
    </BlockStyled>
  )
}

export default FirstScenario
