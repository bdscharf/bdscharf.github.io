import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <p>
      My name is Ben Scharf, and I graduated from Northwestern University in
      2019 with a degree in Computer Science. I'm passionate about music and love learning new technologies. I'm currently a backend engineer working with Flask.
    </p>

    <h2>Media</h2>
    <ul>
      <li>
        <a href="https://github.com/bdscharf">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/benjamin-scharf/">LinkedIn</a>
      </li>
      <li>
        <a href="https://www.last.fm/user/scharfb">Last.fm:</a>
        &nbsp;(some of) the music that I listen to
      </li>
      <li>
        <a href="https://bandcamp.com/bscharf">Bandcamp:</a>
        &nbsp;(some of) the music that I've purchased
      </li>
    </ul>

    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://bdscharf.github.io/tablatar/">Tablatar:</a>
        &nbsp;monophonic guitar transcription for beginners
      </li>
      <li>
        <a href="https://bdscharf.github.io/goat-vs-car/">Goat vs. Car:</a>
        &nbsp;an explorable explanation of the Monty Hall problem
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
