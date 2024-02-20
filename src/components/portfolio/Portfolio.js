import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import portfolio1 from '../../work-1.jpg';
import portfolio2 from '../../work-2.jpg';
import portfolio3 from '../../work-3.jpg';
import portfolio4 from '../../work-4.jpg';
import portfolio5 from '../../work-5.jpg';
import portfolio6 from '../../work-6.jpg';
function Portfolio() {
  return (
    <div>
         <div id='portfolio' className='p-16 bg-slate-100'>
        <div className='w-9/12 mx-auto'>       
        <h1 className=' font-semibold text-5xl text-center mb-5'>PORTFOLIO</h1>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className='mt-16'>
        <div className='columns-3'>
            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio1} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio2} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio3} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>



            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio4} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio5} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
            <div className='bg-white shadow-lg'>
                <div className='portlist'>
                <img src={portfolio6} alt="work" />
                </div>
                <div className='columns-2 py-4 px-3 '>
                <div className='font-medium text-base'>Lorem impsum dolor</div>
                <div className='text-end'><FontAwesomeIcon icon={faLink} /></div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Portfolio