import { Divider, Grid, Typography } from '@material-ui/core'
import Markdown from 'markdown-to-jsx'
import React from 'react'
import { posts } from '../data/Data'

const Main = ({title}) => {
  return (
    <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
      <Divider/>
      {
        posts.map((v,i)=>(
            <Markdown key={v.body}>{v.body}</Markdown>
        ))
      }
    </Grid>
  )
}

export default Main
