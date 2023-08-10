import React from 'react';
import Link from 'next/link';

import Form from '../components/Form';
import schema from '../schema/page';

const App: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <div className="px-4 sm:px-6 py-4 sm:py-6 mb-12 bg-gray-100">
        <div className="flex flex-wrap justify-between">
          <h1 className="basis-4/6 text-2xl font-bold tracking-tight text-gray-900">
            Editor
          </h1>
          <Link
            href="/site"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            View live site
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <Form schema={schema} />
      </div>
    </div>
  );
};

export default App;
