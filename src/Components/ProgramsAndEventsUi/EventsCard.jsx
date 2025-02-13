import { Link } from "react-router-dom"

function EventsCard({ data }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden h-64">
      <img 
        src={data?.coverImg} 
        alt={data?.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-main-color transition-colors">
        {data?.title}
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {data?.description}
      </p>
      <div className="flex items-center justify-between">
        <Link 
          to={``}
          className="text-main-color-dark font-semibold hover:text-main-color transition-colors flex items-center gap-2">
          {data?.date}
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default EventsCard
