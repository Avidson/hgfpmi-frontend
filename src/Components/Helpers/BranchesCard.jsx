import { Link } from "react-router-dom";

const BranchesCard = ({ image, location, head_of_branch, link, active, contact }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="relative overflow-hidden h-64">
      <img 
        src={image} 
        alt={location}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-main-color transition-colors">
          {location}
        </h3>

        <p>{contact}</p>
      </div>
      <p className="text-gray-600 line-clamp-3 mb-4">
        {head_of_branch}
      </p>
      <div className="flex items-center justify-between">
        <Link 
          to={``}
          className="text-main-color-dark font-semibold hover:text-main-color transition-colors flex items-center gap-2">
          VISIT
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        <div className="">
          <div className="flex items-center gap-1">
            <div className={`h-[30px] w-[30px] rounded-full ${active ? 'bg-green-500': 'bg-red-500'}`}></div>
            <p className={`text-[14ppx] font-semibold ${active ? 'text-green-500' : 'text-red-500'}`}>{active ? 'Active' : 'Inactive' }</p>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const BranchesSection = ({ data }) => {
  const blogs = data

  return (
    <section className="py-16 pad1 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl small-pc:text-4xl tablet:text-3xl  font-bold text-gray-900 mb-4">Ministry Branches</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BranchesCard 
              key={blog?.id}
              image={blog?.image || 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4'}
              location={blog?.location}
              head_of_branch={blog?.head_of_branch}
              link={blog?.id}
              active={blog.active}
              contact={blog.contact}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default BranchesSection;