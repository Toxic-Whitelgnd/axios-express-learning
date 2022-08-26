import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function NewsCard({nimages,ntitle,ndescription,nurl,nauthor,index}) {
  return (
    <div key={index} >
        <Card style={{ width: '18rem',margin:'5px' }}>
            <Card.Img variant="top" src={nimages} />
            <Card.Body>
                <Card.Title>{ntitle === null?"Title":ntitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{nauthor === null?"no autor":nauthor}</Card.Subtitle>
                <Card.Text>
                {ndescription}
                </Card.Text>
                <Button variant="primary" href={nurl} >View Full Source</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
