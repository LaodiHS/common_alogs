import Link from 'next/link';
import React from "react";

import "../public/styles/a.css";

const About = () => (
  <div>
    <h1>About : )</h1>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/about"><a>about</a></Link></li>
  </div>
)
export default About