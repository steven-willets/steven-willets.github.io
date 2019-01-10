import React, { Component } from 'react';
import './App.css';
import Slide from './Slide/Slide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main-content" class="section-wrapper">
          <div class="section-container">
            <main class="content-section">
              <h1 class="main-heading">Portfolio</h1>


              <section id="websites">
                <h2 class="content-heading">Websites</h2>
                <ul class="tile-container">
                  <Slide />
                </ul>
              </section>


              <section id="javascript">
                <h2 class="content-heading">JavaScript</h2>
                <ul class="tile-container">
                  <Slide />
                </ul>
              </section>

              
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
