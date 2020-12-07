import { Anchor, Box, Paragraph } from 'grommet'
import styles from './Footer.module.css'

const Footer:React.FC = () => {

  return (
      <Box
        direction='row'
        align='center'
        justify= 'center'
        alignContent='center'
        background='brand'
        className={styles.footer}
      >
        <Paragraph>Built with NextJS, Grommet &amp; GitHub pages</Paragraph>
      </Box>
  )
}

export default Footer