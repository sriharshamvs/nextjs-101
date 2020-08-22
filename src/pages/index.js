import Head from 'next/head'
import Layout, { siteTitle } from '../pages/components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Sriharsha. I'm a software engineer and I tinker with things. Contact me on <a href="https://twitter.com/sriharshamvs">Twitter</a></p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
         <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
         </li>
        ))}
      </ul>
      </section>
    </Layout>
  )
}
