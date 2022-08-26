import { memo } from "react";
import { Container } from "./styles";

export function TitlePage(props) {
  return (
    <Container style={{fontSize: props.size, lineHeight: props.lineHeight}}>
      {props.text} <b>{props.bold}</b>
    </Container>
  )
}

export default memo(TitlePage);