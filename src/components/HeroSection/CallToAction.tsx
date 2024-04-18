import React from 'react';


interface Props {
  tagline: string;
}

const CallToAction: React.FC<Props> = (props) => {
  const { tagline } = props;
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold leading-tight text-center text-gray-800">
          Welcome to Chipper!
        </h1>
        <p className="mt-4 text-gray-600 text-center">{tagline}</p>
        <div className="mt-8">
          <button className="px-6 py-2 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600">
            Start Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;