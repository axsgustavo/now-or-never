import TimeField from "react-simple-timefield";

import { Container } from "./styles";

export function InputTime({ title, value, onChange }) {
  return (
    <Container>
      <span>{title}</span>
      <TimeField
        showSeconds={false}
        style={{width: '100%'}}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}