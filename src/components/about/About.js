import React from 'react'
import Arul from '../../arul.jpg';
function About() {
  return (
    <div id='about' className='p-16'>
        <div className='w-9/12 p-16 mx-auto shadow-lg'>
        <div className='columns-2'>
            <div>
            <div className='columns-2'>
                <div><img src={Arul} className="App-logo border-x-0 rounded-lg" alt="Arul" /></div>
                <div>
                <p className='pb-4'><b>Name</b>: Arul Athiyappan</p>
                <p className='pb-4'><b>Designation</b>: Developer</p>
                <p className='pb-4'><b>Employeer</b>: Parki Solutions</p>
                <p className='pb-4'><b>Email</b>: contact@arul.com</p>
                <p className='pb-4'><b>Phone</b>: +91 93605 13248</p>
                </div>
            </div>
            </div>
            <div>
                <h2 className='text-3xl font-medium mb-2'>About me</h2>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>

                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About