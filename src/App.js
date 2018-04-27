import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {
  state = {
    disabled: false,
    submitted: false,
  }

  submit = () => {
    this.setState({
      disabled: true,
      submitted: true,
    });
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Is Ruby a Shit Language?</h1>

        {!this.state.submitted &&
          <div classNames={styles.choices}>
            <button
              className={`${styles.choice} secondary`}
              disabled={this.state.disabled}
              onClick={this.submit}
            >
              Yes
            </button>
            <button
              className={`${styles.choice} secondary`}
              disabled={this.state.disabled}
              onClick={this.submit}
            >
              <span className={styles.bait}>No</span>
              <span className={styles.switch}>Yes</span>
            </button>
          </div>
        }

        {this.state.submitted &&
          <p className={styles.results}>You're right! Ruby <em>is</em> a shit language.</p>
        }
      </div>
    );
  }
}

export default App;
