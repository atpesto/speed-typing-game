import React, { Component } from 'react';
import {
  Input,
  Row,
  Col,
} from 'antd';

import notifications from '../../helpers/notifications';


const { Search } = Input;
const { simpleNotification } = notifications;

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
];

class Game extends Component {
  constructor(props) {
    super(props);

    const word = this.randomWordPicker();
    this.state = {
      word,
      verificationStatus: undefined,
      score: 0,
      inputValue: '',
    };
  }

  onInputChangeHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  clearInputValue = () => {
    this.setState({
      inputValue: '',
    });
  }

  randomWordPicker = () => {
    const randomNumber = Math.random() * (words.length);

    const randomIndex = Math.floor(randomNumber);
    return words[randomIndex];
  }

  changeCurrentWord = (word) => {
    this.setState({
      word,
    });
  }

  verifyCurrentWord = (input) => {
    const { word } = this.state;

    if (word === input) {
      return true;
    }
    return false;
  }

  submitWordHandler = (input) => {
    const { score } = this.state;
    const result = this.verifyCurrentWord(input);

    if (result === true) {
      this.setState(prevState => ({
        verificationStatus: true,
        score: prevState.score + 1,
      }));

      const newWord = this.randomWordPicker();
      this.changeCurrentWord(newWord);
    } else if (result === false) {
      const message = 'Game Over';
      const description = `You scored ${score}.`;
      simpleNotification(message, description);
      this.setState({
        score: 0,
        verificationStatus: false,
      });
    }
    this.clearInputValue();
  }

  render() {
    const {
      word,
      verificationStatus,
      score,
      inputValue,
    } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <div>
          Type the given word within 5 seconds
        </div>

        <p style={{ fontSize: '45px', marginBottom: '0px' }}>{ word }</p>

        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col span={8}>
            <Search
              placeholder="Input word"
              enterButton="Submit"
              onSearch={this.submitWordHandler}
              onChange={this.onInputChangeHandler}
              value={inputValue}
            />
          </Col>
        </Row>

        <div style={{ marginTop: '5px' }}>
          { verificationStatus === true && 'Yeah! You are correct.' }
          { verificationStatus === false && 'Shit! You got that wrong.' }
          { verificationStatus === undefined && ' ' }
        </div>
        <div style={{ fontSize: '20px', marginTop: '20px' }}>
          Score: { score }
        </div>
      </div>
    );
  }
}

export default Game;
