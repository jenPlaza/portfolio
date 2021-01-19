// JavaScript Document
import React from 'react';
import imgUrl from '../../../images/aboutMeBtn.png';

class AbtButton extends React.Component {
  goToAbout(event) {
    window.onclick = (event) => {
      window.location.assign('https://jenplaza.github.io/jennplaza-aboutme/');
    };
  }

  render() {
    return (
      <div>
        <img
          style={styles.container}
          src={imgUrl}
          alt={'button link to about section'}
          onClick={this.goToAbout}
        />
      </div>
    );
  }
}

export default AbtButton;

const styles = {
  container: {
    width: '23%',
    marginTop: '15%',
  },
};
