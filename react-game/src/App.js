import React, { useState } from 'react';
import paper from './img/paper.gif';
import rock from './img/rock.gif';
import scissors from './img/scissors.gif';
import background from './img/bg.gif';
import logo from './img/rs_school_js.svg';
import styled from 'styled-components';

const Choice = styled.div`
  display: inline-block;
  margin: 1px;
  img {
    width: 20vh;
    height: 20vh;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 7px 15px 3px rgba(239, 245, 249, 0.6);
    outline: none;
    border: 4px solid rgba(239, 245, 249, 0.6);
    transition: ease 1s;
    }
    img:hover {
      cursor: pointer;
      border: 4px solid rgba(239, 245, 249, 0.9);
      box-shadow: 0px 10px 25px 5px rgba(239, 245, 249, 0.9);
    }
`;

const Choices = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const ScoreBoard = styled.div`
  border: 3px solid white;
  width: 200px;
  margin: 20px auto;
  color: white;
  font-size: 40px;
  border-radius: 40px;
  text-align: center;
  padding: 15px 20px;
  font-family: "Asap";
  position: relative;
`;

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Asap:400,500,700");
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-origin: border-box;
  background-size: 100% 100%;
  header {
    padding: 20px;
    background: #5e678d;
    box-shadow: 0px 5px 15px 3px rgba(239, 245, 249, 0.9);
    h1 {
      color: white;
      text-shadow: 4px 3px 0 #7A7A7A;
      text-align: center;
      font-family: "Asap";
    }
  }
  #action-msg {
    color: white;
    text-align: center;
    font-family: "Asap";
    font-weight: bold;
    font-size: 20px;
  }
`;

const Badge = styled.div`
  background: #e25840;
  color: white;
  font-size: 14px;
  padding: 2px 10px;
  font-family: "Asap";
  position: absolute;
  text-align: center;
  left: ${props => (props.id === 'user-label' ? '-25px' : '215px')};
  top: 30px;
`;

const Result = styled.div`
  width: 50%;
  margin: 0 auto;
  box-shadow: 0px 5px 15px 3px rgba(239, 245, 249, 0.9);
  border-radius: 15px;
  font-size: 32px;
  color: white;
  background: #5e678d;
  font-weight: bold;
  p {
    text-align: center;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const Footer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  box-shadow: 0px 5px 15px 3px rgba(239, 245, 249, 0.9);
  border-radius: 15px;
  font-size: 20px;
  color: white;
  background: #5e678d;
  p {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

function App() {
  let [score, setScore] = useState('Choose your weapon');
  let [user, setUser] = useState(0);
  let [comp, setComp] = useState(0);
  let [weapons, setWeapons] = useState({
    user: '',
    computer: ''
  });
  let whichWeapon = weapon => {
    if (weapon === 's') return 'scissors';
    if (weapon === 'p') return 'paper';
    if (weapon === 'r') return 'rock';
  };
  const whoWin = u => {
    const arr = ['p', 's', 'r'];
    const c = arr[~~(Math.random() * arr.length)];
    if (u === c) setScore(`Tie`);
    if (u === 'p' && c === 's') {
      setScore('Paper is cut by scissors. You lost :(');
      setComp(comp + 1);
    }
    if (u === 's' && c === 'p') {
      setScore('Scissors cut paper. You won :)');
      setUser(user + 1);
    }
    if (u === 'r' && c === 'p') {
      setScore('Rock is covered by paper. You lost :(');
      setComp(comp + 1);
    }
    if (u === 'p' && c === 'r') {
      setScore('Paper covers rock. You won :)');
      setUser(user + 1);
    }
    if (u === 's' && c === 'r') {
      setScore('Scissors is broken by rock. You lost :(');
      setComp(comp + 1);
    }
    if (u === 'r' && c === 's') {
      setScore('Rock break scissors. You won :)');
      setUser(user + 1);
    }
    setWeapons({ ...weapons, user: whichWeapon(u), computer: whichWeapon(c) });
  };
  const getWeapon = e => {
    const u = e.currentTarget.id;
    whoWin(u);
  };

  return (
    <Body>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <ScoreBoard>
        <Badge id="user-label" className="badge">
          user
        </Badge>
        <Badge id="computer-label" className="badge">
          comp
        </Badge>
        <span id="user-score">{user}</span>:
        <span id="computer-score">{comp}</span>
      </ScoreBoard>
      <Result>
        <p>{score}</p>
      </Result>
      <Choices>
        <Choice id="r" onClick={getWeapon}>
          <img src={rock} alt="rock" />
        </Choice>
        <Choice id="s" onClick={getWeapon}>
          <img src={scissors} alt="scissors" />
        </Choice>
        <Choice id="p" onClick={getWeapon}>
          <img src={paper} alt="paper" />
        </Choice>
      </Choices>

      {weapons.user ? (
        <p id="action-msg" 
        style={{ width: '50%',
            margin: '0 auto',
            background: '#5e678d',
            boxShadow: '0px 5px 15px 3px rgba(239, 245, 249, 0.9)',
            borderRadius: '15px' }}>
          Your weapon is '{weapons.user}'. Computer weapon is '
          {weapons.computer}'.
        </p>
      ) : (
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Good Luck!
        </h1>
      )}

      <Footer>
              <p>
                  <a href="https://github.com/Fialkaksu">Fialkaksu</a>
              </p>
              <p>
                <a href="https://rs.school/react/">
                  <img src={logo} alt="logo" width="100px"/>
                </a>
                <span>2021</span>
              </p>
      </Footer>
    </Body>
  );
}

export default App;