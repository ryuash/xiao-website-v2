import React from 'react'
import Helmet from 'react-helmet'

const Seo = (props) => {
  const {
    title = 'Xiao',
  } = props

  return (
    <Helmet
      title={`${title} - XiaoArts`}
    />
  )
}

export default Seo
