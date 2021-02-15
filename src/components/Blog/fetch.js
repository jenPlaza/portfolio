import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import EasySteps from './md/7_Easy_Steps_to_Deploying_a_Multipage_site_to_GH-Pages.md';
import {
  blogArray,
  titleArray,
  blurbArray,
  articleArray,
  dateArray,
} from './blog_arrays';

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = { md: '', array: [] };
  }

  /*   componentWillMount() {
    fetch(blogArray)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  } */

  componentWillMount() {
    fetch(EasySteps)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  }

  render() {
    let { md } = this.state;

    return (
      <div>
        <Markdown children={md} />
      </div>
    );
  }
}

export default Fetch;
