import Link from 'next/link'
import Layout from '../component_view/Layout'
import LoginForm from '../component_view/LoginForm'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <LoginForm />
  </Layout>
)

export default IndexPage
