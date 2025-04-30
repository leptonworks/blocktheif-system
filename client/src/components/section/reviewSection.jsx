import { useState } from "react";
import { Star, UserCircle, ChevronRight, Quote, MessageSquare } from "lucide-react";

const reviews = [
  {
    userName: "John Doe",
    userLocation: "New York, USA",
    reviewText: "Great product! BlockThief has really helped me secure my brand's authenticity and eliminate counterfeit products from the market. The blockchain verification is seamless.",
    rating: 5
  },
  {
    userName: "Will Smith",
    userLocation: "Utah, USA",
    reviewText: "Awesome project with incredible potential! The QR scanning feature is intuitive and provides instant verification. My customers appreciate the added security.",
    rating: 4
  },
  {
    userName: "Christopher Bumstead",
    userLocation: "Vegas, USA",
    reviewText: "BlockThief has authentified my products with unparalleled security. The dashboard makes it easy to track everything, and the customer support is excellent.",
    rating: 5
  }
  // ... more review objects
];

function ReviewSection({ title, buttonText, cardsToShow = 3 }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  // Generate star rating display
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? "text-cyan-400 fill-cyan-400" 
            : "text-slate-600"
        }`}
      />
    ));
  };

  const ReviewButton = () => (
    <button
      className="flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setHoveredButton(true)}
      onMouseLeave={() => setHoveredButton(false)}
    >
      <MessageSquare className="mr-2 w-5 h-5" />
      {buttonText || "Leave a Review"}
      <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${hoveredButton ? 'translate-x-1' : ''}`} />
    </button>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 xl:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-2 mr-3">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-cyan-400 font-bold">Testimonials</span>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 mb-4">
            {title || "User Reviews"}
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            See what our users are saying about BlockThief's blockchain authentication solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.slice(0, cardsToShow).map((review, i) => (
            <div 
              key={i}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Review header */}
              <div className="p-6 border-b border-cyan-500/10">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-full p-1 mr-3 border border-cyan-500/30">
                    <UserCircle className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{review.userName}</h3>
                    <p className="text-gray-400 text-sm">{review.userLocation}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-cyan-400 text-sm font-medium">{review.rating}.0</span>
                </div>
              </div>
              
              {/* Review body */}
              <div className="p-6 relative">
                <Quote className="absolute top-2 left-2 w-8 h-8 text-cyan-500/10" />
                <p className="text-gray-300 relative z-10">{review.reviewText}</p>
                
                <button 
                  className={`mt-6 text-cyan-400 font-medium flex items-center text-sm transition-all duration-300 ${hoveredCard === i ? 'text-cyan-300' : ''}`}
                >
                  Read full review
                  <ChevronRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${hoveredCard === i ? 'translate-x-1' : ''}`} />
                </button>
              </div>
              
              {/* Visual indicator */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Review CTA */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur-sm rounded-lg group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative">
              <ReviewButton />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  );
}

export default ReviewSection;