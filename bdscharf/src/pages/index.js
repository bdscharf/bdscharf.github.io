import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <p>
      My name is Ben Scharf, and I graduated from Northwestern University in
      2019 with a degree in Computer Science. I'm passionate about music,
      technology, and social equity.
    </p>

    <h2>Media</h2>
    <ul>
      <li>
        <a href="https://github.com/bdscharf">github</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/benjamin-scharf/">linkedin</a>
      </li>
      <li>
        <a href="https://www.last.fm/user/scharfb">lastfm:</a>
        &nbsp;(some of) the music that I listen to on my computer
      </li>
      <li>
        <a href="https://bandcamp.com/bscharf">bandcamp:</a>
        &nbsp;(some of) the music that I've purchased
      </li>
    </ul>

    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://bdscharf.github.io/tablatar/">tablatar:</a>
        &nbsp;monophonic guitar transcription for beginners
      </li>
      <li>
        <a href="https://bdscharf.github.io/goat-vs-car/">goat vs. car:</a>
        &nbsp;an explorable explanation of the monty hall problem
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
