//src/day1/Code09_Props.js
import React from "react";
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      leapYear: true,
      info: {
        type: "programming"
      }
    };
  }

  render() {
    const { leapYear, info } = this.state;
    return (
      <BookDisplay
        leapYear={leapYear}
        info={info}
        topics={["React", "React Native", "Javascript"]}
      />
    );
  }
}
export default MyComponent;

// 함수형 컴포넌트
const BookDisplay = props => {
  let leapYear;
  const { info } = props; // 구조 분해 할당
  if (props.leapYear) {
    leapYear = <h1>This is a leapYear!</h1>;
  }
  let { topics } = props;
  topics = topics.map((topic, i) => {
    return <h1 key={i}>{topic}</h1>;
  });
  return (
    <div>
      {leapYear}
      <h1>{info.type}</h1>
      {topics}
    </div>
  );
};