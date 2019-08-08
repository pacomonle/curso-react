import React from 'react';
import Comment from './Comment';
import faker from 'faker';

const CommentList  = () => {

    let mycomments = [
        {
            avatar: faker.image.avatar(),
            nombre: faker.name.firstName(),
            hora: faker.date.recent().toUTCString(),
            comentario: faker.lorem.sentence()
        },
        {
            avatar: faker.image.avatar(),
            nombre: faker.name.firstName(),
            hora: faker.date.recent().toDateString(),
            comentario: faker.lorem.sentence()
        },
        {
            avatar: faker.image.avatar(),
            nombre: faker.name.firstName(),
            hora: faker.date.recent().toLocaleDateString(),
            comentario: faker.lorem.sentence()
        },
    ]
    console.log(mycomments);

    return (
    <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {
            mycomments.map(
                item => {
                    console.log(item);
                    return (         
                     <Comment avatar={item.avatar} 
                        nombre={item.nombre} 
                       hora = {item.hora}
                        comentario={item.comentario}>
                        </Comment>
                    )
                }
            )
        }

    
    </div>
    )
}

export default CommentList;