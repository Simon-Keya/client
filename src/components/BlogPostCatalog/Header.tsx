import React from 'react';

interface Props {
  searchTerm: string;
  onSearchSubmit: (searchTerm: string) => void;
}

const BlogPostsCatalogHeader: React.FC<Props> = (props) => {
  const { searchTerm, onSearchSubmit } = props;
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold leading-tight text-center text-gray-800 mb-12">
          Blog Posts
        </h1>
        <div className="w-full max-w-2xl">
          <form onSubmit={(e) => {
            e.preventDefault();
            onSearchSubmit(searchTerm);
          }}>
            <label htmlFor="search" className="sr-only">
              Search posts
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none">
                  <path d="M9.438 15.438a1 1 0 001.414 1.414l5-5a1 1 0 00-1.414-1.414L10 14.586 4.438 9.1a1 1 0 00-1.414 1.414L10 17l5-5z" />
                  <path d="M15.707 15.707a1 1 0 00-1.414-1.414L14.586 13H4.586a1 1 0 100 2h10.002l-3.293 3.293z" />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search posts"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:leading-5"
                value={searchTerm}
                onChange={(e) => {
                  const value = (e.target as HTMLInputElement).value;
                  onSearchSubmit(value);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPostsCatalogHeader;