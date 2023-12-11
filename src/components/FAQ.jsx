import React from 'react'
import { Accordion } from 'react-bootstrap'

const FAQ = () => {
  return (
    <Accordion defaultActiveKey="0" flush className='p-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is CEVcinema?</Accordion.Header>
        <Accordion.Body>
        CEVcinema is a website that provides many Japanese cartoon films or what are often called anime.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What film type are provided at CEVcinema?</Accordion.Header>
        <Accordion.Body>
        CEVcinema provides film types such as tv, movie, ova, special, ona, music, etc.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  )
}

export default FAQ