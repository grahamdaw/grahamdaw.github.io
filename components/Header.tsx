import Head from 'next/head'

interface Props {
  pageTitle?: string
  description?: string
  lang?: string
  metaTags?: Array<{
    name?: string
    property?: string
    content: string
  }>
}

const Header:React.FC<Props> = ({ 
  description='', 
  //lang='en', 
  metaTags=[], 
  pageTitle 
}) => {

  const title = (pageTitle) ? `${process.env.siteTitle} | ${pageTitle}` : process.env.siteTitle

  metaTags.concat([
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: process.env.siteAuthor || '',
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ])

  return (
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        {metaTags && metaTags.map((metaTag)=>
          <meta 
            {...metaTag.name && { name: metaTag.name }}
            {...metaTag.property && { property: metaTag.property }}
            {...metaTag.content && { content: metaTag.content }}
            // TODO make sure key attribute is used
          />
        )}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Head>
  )
}

export default Header