import styled from "styled-components"

export const PageTranslateHeader = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 30px;
  height: 40px;
  padding: 20px;
  border: 1px solid #6d6d6d;
  background-color: white;
`

export const TranslateBodyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #6d6d6d;
`

export const TranslateBodySwapButton = styled.button`
  cursor: pointer;
  background-color: white;
  border: 0;

  &:hover {
    border-radius: 50%;
    background-color: #d1d1d1;
  }

  &:active {
    border-radius: 50%;
    background-color: #b8b8b8;
  }
`

export const TranslateBodyLanguage = styled.div`
  width: calc(50% - 20px);
`

export const TranslateBodySelectLanguage = styled.select`
  background-color: #d1d1d1;
  border: 0;
  border-radius: 3px;
  margin: 5px;
  padding: 0.5em 2.5em 0.5em 0.5em;
  font-size: inherit;
  justify-content: center;
`

export const TranslateBody = styled.div`
  background-color: white;
  margin: 20px;
  height: 50vh;
  border: 1px solid #6d6d6d;
  border-radius: 12px;
`

export const HistoryButton = styled.button`
  border-radius: 50%;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border: 0;
  color: blue;
  height: 50px;
  width: 50px;

  &:hover {
    color: white;
    border-radius: 50%;
    background-color: #4a4a4a;
  }

  &:active {
    color: white;
    border-radius: 50%;
    background-color: #3f3e3e;
  }
`