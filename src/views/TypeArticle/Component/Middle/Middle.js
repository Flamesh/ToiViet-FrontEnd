import Card3 from 'components/Card/Card3'
import React from 'react'
import { title, content, image, summary, id, author } from "variables/artilce";

export default function Middle() {
    return (
        <div>
            <Card3  
                title={title}
                  content={content}
                  imageUrl={image}
                  summary={summary}
                  id={id}
                  author={author} />
        </div>
    )
}
