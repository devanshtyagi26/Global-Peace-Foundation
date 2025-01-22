import React, { useState } from 'react';
import { FileText, Download, Search, BookOpen, FileCheck, Filter } from 'lucide-react';

const RESOURCES = [
  {
    id: 1,
    title: 'Youth Leadership in the Indo-Pacific: A Comprehensive Study',
    type: 'report',
    category: 'Leadership',
    date: '2024-02',
    description: 'An in-depth analysis of youth leadership trends and opportunities across the region.',
    downloadUrl: '#',
    fileSize: '2.4 MB',
    format: 'PDF'
  },
  {
    id: 2,
    title: 'Cultural Exchange Impact Assessment',
    type: 'paper',
    category: 'Cultural Studies',
    date: '2024-01',
    description: 'Research paper examining the long-term effects of cultural exchange programs.',
    downloadUrl: '#',
    fileSize: '1.8 MB',
    format: 'PDF'
  },
  {
    id: 3,
    title: 'Regional Cooperation Framework Guide',
    type: 'guide',
    category: 'Cooperation',
    date: '2024-03',
    description: 'Practical guide for establishing and maintaining regional partnerships.',
    downloadUrl: '#',
    fileSize: '3.2 MB',
    format: 'PDF'
  },
  {
    id: 4,
    title: 'Youth Engagement Best Practices',
    type: 'report',
    category: 'Engagement',
    date: '2024-02',
    description: 'Comprehensive report on successful youth engagement strategies.',
    downloadUrl: '#',
    fileSize: '4.1 MB',
    format: 'PDF'
  }
];

const Resources = () => {
  const [filter, setFilter] = useState<'all' | 'report' | 'paper' | 'guide'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'report':
        return <FileText className="w-6 h-6" />;
      case 'paper':
        return <BookOpen className="w-6 h-6" />;
      case 'guide':
        return <FileCheck className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const handleFilterChange = (newFilter: 'all' | 'report' | 'paper' | 'guide') => {
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => setIsLoading(false), 300);
  };

  const filteredResources = RESOURCES.filter(resource => {
    const matchesFilter = filter === 'all' || resource.type === filter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access our collection of reports, research papers, and guides to support your engagement in the Indo-Pacific youth community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => handleFilterChange('all')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All
            </button>
            <button
              onClick={() => handleFilterChange('report')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === 'report'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => handleFilterChange('paper')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === 'paper'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Papers
            </button>
            <button
              onClick={() => handleFilterChange('guide')}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === 'guide'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Guides
            </button>
          </div>
        </div>

        <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          {filteredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-xl animate-fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    resource.type === 'report' ? 'bg-blue-100 text-blue-800' :
                    resource.type === 'paper' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {getIcon(resource.type)}
                    <span className="ml-2">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                  </span>
                  <span className="text-sm text-gray-500">{resource.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-indigo-600">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">
                    {resource.fileSize} • {resource.format}
                  </span>
                  
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 transition-all duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;