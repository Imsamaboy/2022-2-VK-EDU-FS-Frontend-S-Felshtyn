import styled from 'styled-components'


export const PageChatWrapper = styled.div`
  background-color: #e6e6e6;
  display: flex;
  flex-direction: column;
  font-family: Rubik, sans-serif;
  height: 100vh;
  margin: 0;
  width: 100vw;
`

export const PageChatHeader = styled.header`
  background-color: #8e24aa;
  display: flex;
  height: 90px;
`

export const BackButton = styled.button`
  color: white;
  background-color: #8E24AA;
  flex-basis: 80px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ab47b2;
  }
  &:active {
    background-color: rgb(151, 48, 195);
  }
`

export const SearchButton = styled.button`
  color: white;
  background-color: #8E24AA;
  flex-basis: 80px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ab47b2;
  }
  &:active {
    background-color: rgb(151, 48, 195);
  }
`

export const MoreButton = styled.button`
  color: white;
  background-color: #8E24AA;
  flex-basis: 80px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ab47b2;
  }
  &:active {
    background-color: rgb(151, 48, 195);
  }
`


export const Profile = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
  flex: 1 1;
  margin-left: 30px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 45px;
  cursor: pointer;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Chat = styled.div`
  display: flex;
  flex-basis: 90px;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  animation: right-message-scale 0.5s;
`

export const MessageLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 20px 20px 20px;
  margin: 8px;
  word-break: break-word;
  height: 60px;
  align-self: flex-start;
  background-color: white;
  border: 1px solid #FAFAFA;
`

export const MessageRight = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 20px 20px 20px;
  margin: 8px;
  word-break: break-word;
  height: 60px;
  align-self: flex-end;
  background-color: #F3E5F5;
  border: 1px solid #DCD8DD;
  animation: message_animation 0.3s;
`

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-end;
`

export const MessageTime = styled.div`
  color: #A8A8A8;
  font-size: 13px;
  align-self: flex-end;
  padding: 0 0 4px;
`

export const Form = styled.form`
  border: 1px solid rgba(25,25,25,.32);
  display: flex;
  height: 60px;
`

export const FormInput = styled.input`
  flex: 1 1;
  font-family: Rubik;
  font-size: 16px;
  padding: 20px;
  border: 0;
  outline: none;
  width: calc(100% - 2px);
`

export const AttachmentButton = styled.button`
  color: #757575;
  border: 0;
  padding-right: 20px;
  background-color: white;
  cursor: pointer;
  transition: opacity 0.2s, color 0.2s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.8;
    color: #aa00ff;
  }
`
