import React from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import {connect} from 'react-redux';
import {addBook, removeBook} from './actions';

const initialState = {
  name: '',
  author: ''
};

class Books extends React.Component {
  state = initialState;

  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value
    });
  };

  addBook = () => {
    this.props.dispatchAddBook(this.state);
    this.setState(initialState);
  };

  removeBook = book => {
    this.props.dispatchRemoveBook(book);
  };

  render() {
    // connect 함수가 books 배열을 반환하므로(이 예제의 하단 부분 참조)
    // 이 배열을 props로 참조할 수 있음.
    const {books} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Books</Text>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.booksContainer}>
          {/* 배열을 매핑해서 각 도서의 이름과 저자를 표시함 */}
          {books.map((book, index) => (
            <View style={styles.book} key={index}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text onPress={() => this.removeBook(book)}>Remove</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={this.state.name}
              onChangeText={value => this.updateInput('name', value)}
              style={styles.input}
              placeholder="Book Name"
            />
            <TextInput
              value={this.state.author}
              onChangeText={value => this.updateInput('author', value)}
              style={styles.input}
              placeholder="Author Name"
            />
          </View>
          <TouchableOpacity onPress={this.addBook}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 18
  },
  author: {
    fontSize: 14,
    color: '#999'
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});

// 리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환함.
// 이 키는 books 배열을 포함하고 있음
const mapStateToProps = state => ({
  books: state.bookReducer.books
});

const mapDispatchToProps = {
  dispatchAddBook: book => addBook(book),
  dispatchRemoveBook: book => removeBook(book)
};
// connect 함수의 결과를 외부에 export
export default connect(mapStateToProps, mapDispatchToProps)(Books);
