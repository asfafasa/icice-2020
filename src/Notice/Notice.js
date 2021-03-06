import React from 'react';

function Notice() {
  return (
    <div>
      <div className='xl:my-10 bg-gray-700 text-gray-100'>
        <div className='xl:w-2/3 mx-auto text-xl'>
          <div className='marquee p-4 overflow-x-hidden'>
            <p>
              All the accepted paper will be published in " Lecture Notes in
              management and Industrial Engineering "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
