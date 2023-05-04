import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from 'react-simplified';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Card, Row, Column, Button, Form, NavBar } from './widgets';
import { createHashHistory } from 'history';
import { Score, gameService } from './services';


// for å kunne bytte url med kode, må dette med.
// Hvis man skal bytte url med html tag så bruk <NavLink to="url"/>
const history = createHashHistory();


class Home extends Component {

  scores: Score[] = [];

  render() {
    return(
      <Card title="Spill">
        <Row>
          <Column width={2}>
            Spiller
          </Column>
          <Column width={2}>
            Poeng
          </Column>
        </Row>
        {
          this.scores.map((item, index) => {
            return <Row key={index}>
                      <Column width={1}>
                        { item.name }
                      </Column>
                      <Column width={1}>
                        { item.score }
                      </Column>
                      <Column width={1}>
                        <Button.Light
                          onClick={() => this.addScore(item.name, item.score)}
                        >
                          +
                        </Button.Light>
                      </Column>
                    </Row>
          })
        }
        <Row>
          <Column width={2}>
            <Button.Light
              onClick={this.reset}
            >
              Nullstill
            </Button.Light>
          </Column>
        </Row>
      </Card>
    );
  }

  async reset(): Promise<void> {
    await gameService.resetScores();
    this.scores = await gameService.getScores();
  }

  async addScore(name: string, score: number): Promise<void> {
    await gameService.updateScore(name, score + 1);
    this.scores = await gameService.getScores();
  }

  async mounted(): Promise<void> {
    this.scores = await gameService.getScores();
  }
}

let root = document.getElementById('root');
if (root)
  createRoot(root).render(
    <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </HashRouter>
    </div>
  );
