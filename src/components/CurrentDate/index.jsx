import { memo } from "react";
import { Container } from "./styles";

function CurrentDate(props) {
  const date = new Date();

  let dateFormat = {
    day: date.getDate(),
    month: '',
    years: date.getFullYear(),
  };

  if ((date.getMonth() + 1) < 10) {
    dateFormat.month = `0${date.getMonth() + 1}`;
  } else {
    dateFormat.month = `${date.getMonth() + 1}`;
  }

  return (
    <Container style={{textAlign: props.position}}>
      {dateFormat.day}/{dateFormat.month}/{dateFormat.years}
    </Container>
  );
}

export default memo(CurrentDate)