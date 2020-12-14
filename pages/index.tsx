import { Anchor, Box, Heading, Paragraph } from 'grommet'
import { Github, Linkedin } from 'grommet-icons'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from './index.module.css'

export default function Home() {
  return (
    <Box 
      className={styles.container}
      fill={true}
    >

      <Header/>

      {/* Menu/appbar can go here */}

      {/* Body Wrapper */}
      <Box 
        tag='main'
        direction='column'
        align='center'
        alignContent='center'
        flex={"grow"}
        pad="medium"
      >
        <Heading level={1}>Welcome to {process.env.siteTitle}</Heading>
        <Paragraph>
          This a simple GitHub page that links to various other places. You can check out the source code for this page{' '}
          <Anchor
            href={process.env.siteSourceCode}
            target="_blank"
            rel="noopener noreferrer"
            a11yTitle='Link to the source code'
          >here</Anchor>.
        </Paragraph>

        <Box
          direction='row'
        >
          <Anchor
            className={styles.iconLink}
            href={process.env.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Github />}
            a11yTitle='Link to my GitHub'
          />
          <Anchor
            className={styles.iconLink}
            href={process.env.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Linkedin />}
            a11yTitle='Link to my LinkedIn profile'
          />
        </Box>
      </Box>


      <Footer/>
    </Box>
  )
}
