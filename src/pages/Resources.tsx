import { useState } from "react";
import {
  FileText,
  Download,
  Search,
  BookOpen,
  FileCheck,
  Filter,
} from "lucide-react";

const RESOURCES = [
  {
    id: 1,
    title:
      "Experts Convene to Shape Indo-Pacific Region Peace and Security Agenda",
    type: "report",
    date: "2025-02",
    description:
      "Press Note: A proprietary meeting conducted with various diplomats for planning and execution of the upcoming episode of the forum.",
    downloadUrl: "/PDF/Press Notes February 11, 2025 - Report.pdf",
    fileSize: "51 KB",
    format: "PDF",
  },
  {
    id: 2,
    title: "Peace and Security in the Indo-Pacific Region : Shaping Stability",
    type: "book",
    date: "2024",
    description:
      "A comprehensive analysis of Indo-Pacific security, highlighting geopolitical challenges, maritime security, climate resilience, and regional cooperation.",
    downloadUrl: "/PDF/Peace and Security - Book.pdf",
    fileSize: "11.8 MB",
    format: "PDF",
  },
  {
    id: 3,
    title: "Launc of Indo-Pacific Peace Forum at ARSP, New Delhi",
    type: "article",
    date: "2024-03",
    description:
      "A round table Workshop on Peace and Security in the Indo-Pacific Region: Charting a Path Toward Stability",
    downloadUrl: "/PDF/Launch of Indo Pacific Peace Forum - Article.pdf",
    fileSize: "97 KB",
    format: "PDF",
  },
  {
    id: 4,
    title: "IPPF Newsletter",
    type: "report",
    date: "2024-09",
    description:
      "An engagement report of the launch of Indo-Pacific Peace Forum held at ARSP, NEW DELHI",
    downloadUrl: "/PDF/IPPF Newsletter_20250309_171408_0000 - Report.pdf",
    fileSize: "32.5 MB",
    format: "PDF",
  },
];

const Resources = () => {
  const [filter, setFilter] = useState<"all" | "report" | "book" | "article">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case "report":
        return <FileText className="w-6 h-6" />;
      case "book":
        return <BookOpen className="w-6 h-6" />;
      case "article":
        return <FileCheck className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const handleFilterChange = (
    newFilter: "all" | "report" | "book" | "article"
  ) => {
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => setIsLoading(false), 300);
  };

  const filteredResources = RESOURCES.filter((resource) => {
    const matchesFilter = filter === "all" || resource.type === filter;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
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
            Access our collection of reports, books, and guides to support your
            engagement in the Indo-Pacific youth community.
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
              onClick={() => handleFilterChange("all")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "all"
                  ? "bg-[#033558] text-white shadow-md"
                  : "text-gray-700 hover:text-[#678cb8]"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              All
            </button>
            <button
              onClick={() => handleFilterChange("report")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "report"
                  ? "bg-[#033558] text-white shadow-md"
                  : "text-gray-700 hover:text-[#678cb8]"
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => handleFilterChange("book")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "book"
                  ? "bg-[#033558] text-white shadow-md"
                  : "text-gray-700 hover:text-[#678cb8]"
              }`}
            >
              Books
            </button>
            <button
              onClick={() => handleFilterChange("article")}
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === "article"
                  ? "bg-[#033558] text-white shadow-md"
                  : "text-gray-700 hover:text-[#678cb8]"
              }`}
            >
              Articles
            </button>
          </div>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}
        >
          {filteredResources.map((resource, index) => (
            <div
              key={resource.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-xl animate-fade-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      resource.type === "report"
                        ? "bg-blue-100 text-blue-800"
                        : resource.type === "book"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {getIcon(resource.type)}
                    <span className="ml-2">
                      {resource.type.charAt(0).toUpperCase() +
                        resource.type.slice(1)}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">{resource.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-[#678cb8]">
                  {resource.title}
                </h3>

                <p className="text-gray-600 mb-4">{resource.description}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">
                    {resource.fileSize} • {resource.format}
                  </span>

                  <a
                    href={resource.downloadUrl}
                    download={`${resource.title}.pdf`} // Properly concatenates the filename
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#033558] transition-all duration-300 ease-in-out transform hover:bg-[#033558] hover:scale-105 hover:shadow-lg"
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
