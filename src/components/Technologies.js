import React from 'react';

const Technologies = (props) => {

    const techs = props.techs
    const listTechnologies = techs.map((tech) =>
    <li>{tech}</li>
  );

    return(
        <div className='technology'>


            <ul>{listTechnologies}</ul>

        </div>
    )
}

export default Technologies;