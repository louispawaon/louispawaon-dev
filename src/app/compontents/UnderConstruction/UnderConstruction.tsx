import React from 'react';
import Lottie from 'lottie-react';
import UnderConstructionAnimate from '../../../../public/UnderConstruction.json';

const UnderConstruction = () => {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='flex flex-col items-center p-8 rounded shadow-md'>
        <Lottie loop animationData={UnderConstructionAnimate} className='w-[150px]' />
        <h1 className='text-2xl font-bold mb-4'>Website Under Construction</h1>
        <p className='mb-6'>
          For inquiries, please email me at {' '}
          <a className='underline' href={`mailto:lpawaon@gmail.com`}>
            lpawaon@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default UnderConstruction;
