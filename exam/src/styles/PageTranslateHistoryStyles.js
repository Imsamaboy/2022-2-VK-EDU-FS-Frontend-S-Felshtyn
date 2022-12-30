import styled from "styled-components"

export const PageTranslateHistoryButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`

export const PageTranslateHistoryHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 30px;
  height: 40px;
  padding: 20px;
  border: 1px solid #6d6d6d;
  background-color: white;
`

export const PageTranslateHistoryBodyWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #6d6d6d;
  border-radius: 12px;
`

export const FromLanguage = styled.div`
  color: blue;
`

export const ToLanguage = styled.div`
  color: black;
`

export const FromLanguageText = styled.div`
  color: black;
`

export const ToLanguageText = styled.div`
`

export const HistoryCleanButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border: 0;
  color: blue;
  border-radius: 5px;
  
  &:hover {
    color: white;
    background-color: #4a4a4a;
  }

  &:active {
    color: white;
    background-color: #3f3e3e;
  }
`

export const HistoryBackButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border: 0;
  color: blue;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #4a4a4a;
  }

  &:active {
    color: white;
    background-color: #3f3e3e;
  }
`