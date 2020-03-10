// src/day1/Code01_Helloworld.js
// 기본 리액트 네이티브 클래스
import React from 'react'
import '../App.css';
export default class HelloWorld extends React.Component {
  // 생성자에 name속성을 가지는 state로 지정
  constructor () {
    super()
    this.state = {
      name: '안녕하세요'
    }
  }
  // 라이프사이클에서 최종 실행되는 메소드
  componentDidMount () {
    console.log('mounted..')
  }

  render () {
    return (
      <div
        style={{
          marginTop: 100,
          flex: 1
        }}
      >
        <h1>
          {this.state.name}
        </h1>
      </div>
    )
  }
}

