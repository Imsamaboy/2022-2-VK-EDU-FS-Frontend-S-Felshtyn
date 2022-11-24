import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    height: 90px;
    background-color: #8E24AA;
`

export const Button = styled.button`
  background-color: #8E24AA;
  color: white;
  border: 0;
  flex-basis: 60px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ab47b2;
  }
  &:active {
    background-color: rgb(151, 48, 195);
  }
`

export const PageTitle = styled.div`
  flex-grow: 1;
  display: flex;
  color: white;
  align-items: center;
  padding-left: 10px;
  font-size: 24px;
`

export const CreateButton = styled.button`
    position: absolute;
    box-shadow: 2px 2px #c6c3c7;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 0;
    background-color: #f9d667;
    bottom: 25px;
    right: 25px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
      transform: scale(1.1);
    }

    &:active {
      opacity: 1;
      transform: scale(1);
      animation: pulse 0.2s 1 ease-out;
    }
`

export const ChatWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`

export const Chat = styled.section`
  display: flex;
  flex-direction: row;
  color: black;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgb(221, 208, 208);
  }
  &:active {
    background-color: rgb(212, 184, 214);
  }
`
export const ChatInfo = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid #e7e7e7;
  gap: 10px;
  flex-grow: 1;
`

export const ChatMeta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid #e7e7e7;
  gap: 10px;
`

export const ChatImage = styled.div`
  display: flex;
  flex-basis: 85px;
  align-items: center;
  justify-content: center;
`


export const ReceivedMessageStatus = styled.div`
  padding: 2px 0 0 0;
  height: 25px;
  width: 30px;
  color: #8E24AA;
  align-self: flex-end;
  border-radius: 35%;
  text-align: center;
`