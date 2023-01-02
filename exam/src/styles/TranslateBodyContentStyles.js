import styled from "styled-components"

export const TranslateBodyContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`

export const TranslateBodyFrom = styled.div`
  border-right: 1px solid;
  width: 50%;
`

export const TranslateBodyForm = styled.form`
  display: flex;
  border: 0;
  *:focus {
    outline: none;
  }
`

export const TranslateBodyFormInput = styled.input`
  color: #757575;
  height: auto;
  padding: 20px;
  border: 0;
  font-size: 25px;
`

export const TranslateBodyTo = styled.div`
  border: 0;
  font-size: 25px;
  height: auto;
  padding: 20px;
  text-align: left;
  width: 50%;
`