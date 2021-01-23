// JavaScript Document
import React from 'react';
import imgUrl from '../../../images/printMe.png';

class PrintButton extends React.Component {
  print(event) {
    window.onclick = (event) => {
      window.print();
    };
  }

  render() {
    return (
      <div>
        <a href="resume_2021.pdf" download>
          <img
            style={styles.Btn}
            src={imgUrl}
            alt={'test'}
            onClick={this.print}
          />
        </a>
      </div>
    );
  }
}

export default PrintButton;

const styles = {
  Btn: {
    width: '55%',
    margin: '14%',
  },
};
