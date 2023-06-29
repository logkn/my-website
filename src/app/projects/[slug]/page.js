import Header from '@/app/components/Header'
import React from 'react'
import FluxNCPs from 'public/projects/md/fluxncps.mdx'

const mds = []
const slugs = ["fluxncps.mdx", "finml.mdx"]

const page = ({params}) => {
    const slug = params.slug
  return (
    <div>
        <Header current_page={"Projects"}/>
        <FluxNCPs/>
    </div>
  )
}

export default page