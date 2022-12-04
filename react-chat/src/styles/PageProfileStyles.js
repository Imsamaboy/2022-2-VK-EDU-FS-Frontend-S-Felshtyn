import styled from 'styled-components'

export const PageProfileHeader = styled.header`
  background-color: #8e24aa;
  display: flex;
  height: 90px;  
`

export const PageProfileEdit = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-grow: 1;
  font-size: 24px;
  padding-left: 10px;
`

export const AcceptButton = styled.button`
  padding: 31px 24px;
  background-color: #8e24aa;
  border: 0;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ab47b2;
  }
  &:active {
    background-color: rgb(151, 48, 195);
  }
`

export const ProfileImage = styled.img`
  cursor: pointer;
  display: flex;
  left: 45vw;
  margin-top: 5vh;
  position: relative;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`

export const ProfileInfo = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 5vh;
  margin-left: 5vw;
  margin-top: 5vh;
  overflow-y: auto;
  width: 100%;  
`

export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 85%;
  background-color: hsla(0,0%,83%,.498);
  border-bottom: .5vh solid #a0a0a0;
  border-top-left-radius: 1vh;
  border-top-right-radius: 1vh;
  gap: 2vh;
  padding-left: 1vw;
`

export const ProfileInfoSpan = styled.span`
  color: gray;
  font-size: 14px;
  line-height: 1.5em;
`

export const ProfileInfoInput = styled.input`
  background-color: rgba(51,51,51,0);
  border: none;
  font-size: 16px;
  outline: none;
  width: calc(100% - 2px);
`

