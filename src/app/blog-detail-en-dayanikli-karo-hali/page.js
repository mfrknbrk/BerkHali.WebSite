"use client"
import React from 'react'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import BlogDetailEnDayanikliKaroHali from '@/components/blog-section/BlogDetailEnDayanikliKaroHali'
import { Row } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <Breadcrumb title={"Blog"} />
      <section className="section-product padding-tb-50">
        <div className="container">
          <Row className="mb-minus-24">
            <BlogDetailEnDayanikliKaroHali />
          </Row>
        </div>
      </section>
    </>
  )
}

export default page
