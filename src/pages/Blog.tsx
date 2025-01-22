import React, { useState } from 'react';
import { Calendar, User, Tag, ChevronRight, Search, Filter } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Youth Leaders Summit Strengthens Regional Ties",
    excerpt: "Over 200 young leaders from across the Indo-Pacific region gathered in Singapore for a groundbreaking summit on regional cooperation and peace initiatives.",
    date: "2024-03-15",
    author: "Sarah Chen",
    category: "Events",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Cultural Exchange Program Launches in Tokyo",
    excerpt: "A new initiative bringing together youth from 12 Indo-Pacific nations aims to foster understanding through traditional arts and modern cultural dialogue.",
    date: "2024-03-10",
    author: "Akiko Tanaka",
    category: "Cultural Diplomacy",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Digital Peace Initiative Gains Momentum",
    excerpt: "Young tech leaders collaborate on innovative solutions for cybersecurity and digital cooperation across borders.",
    date: "2024-03-05",
    author: "Michael Wong",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Environmental Cooperation Forum Success",
    excerpt: "Youth environmentalists from the Indo-Pacific region share strategies for tackling climate change through cross-border collaboration.",
    date: "2024-03-01",
    author: "Emma Wilson",
    category: "Environment",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&q=80"
  }
];

const CATEGORIES = [
  "All",
  "Events",
  "Cultural Diplomacy",
  "Technology",
  "Environment",
  "Peace Initiatives"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setIsLoading(false), 300);
  };

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Latest News & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in peacebuilding, cultural diplomacy, and regional collaboration across the Indo-Pacific.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-indigo-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === "All" && !searchTerm && (
          <div className="mb-12 animate-fade-slide-up">
            {BLOG_POSTS.filter(post => post.featured).map(post => (
              <div
                key={post.id}
                className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-96">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-sm font-medium mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-200 mb-4 max-w-2xl">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Article Grid */}
        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
          isLoading ? 'opacity-50' : 'opacity-100'
        }`}>
          {filteredPosts.filter(post => !post.featured || selectedCategory !== "All" || searchTerm).map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 animate-fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="inline-block px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <button className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;