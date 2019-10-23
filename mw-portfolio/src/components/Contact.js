import React from 'react';
import cv from '../files/Developer-CV.pdf'

const Contact = () => {
    return(
        <div className='contact'>

            
               
                    <a href='https://www.linkedin.com/in/mohammed-wilkinson-0a44b1b9/' id='linkedin'>
                        LinkedIn

                    </a>

                
               
                    <a href='https://github.com/WilkinsonM1' id='github'>
                        Github
                        
                    </a>

                
               
                     <a href={cv} download id='cv'>
                        CV
                     </a>

                
                




            

        </div>
    )
}

export default Contact;