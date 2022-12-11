import styled from "styled-components";

export const ImageInput = styled.input`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`

export const ImageLabel = styled.label`
  color: #757575;
  border: 0;
  background-color: white;
  cursor: pointer;
  transition: opacity 0.2s, color 0.2s;
  padding: 18px 10px 10px;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
    color: #aa00ff;
  }
`

export const LocationButton = styled.button`
  color: #757575;
  border: 0;
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

export const AudioButton = styled.button`
  color: #757575;
  border: 0;
  background-color: white;
  cursor: pointer;
  transition: opacity 0.2s, color 0.2s;
  padding-right: 10px;
  padding-left: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
    color: #aa00ff;
  }
`

export const AudioButtonOnRecord = styled.button`
  color: red;
  border: 0;
  background-color: white;
  padding-right: 10px;
  padding-left: 5px;
`

export const DiscardButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin-left: 70px;
  padding: 3px 6px 6px 3px;
  color: white;
  background-color: #8E24AA;
  scale: 70%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #ab47b2;
  }

  &:active {
    background-color: rgb(151, 48, 195);
  }
`
