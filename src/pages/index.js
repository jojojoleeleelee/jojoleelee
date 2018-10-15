import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Joanne Lee</h1>
     <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
     Joanne Lee
     </div>
    <p>Joanne Lee is a lifelong learner and builder of things</p>
    <p>Feel free to reach out!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
