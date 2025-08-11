import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop, faHome} from '@fortawesome/free-solid-svg-icons';

export default function ServicesBlocks() {

  const services = [
    {
      title: 'Web Development',
      description: 'Build or modernize platforms with AI features for smarter, more efficient performance.',
      image: 'images/service-icons/webdev.png'
    },
    {
      title: 'Mobile App Development',
      description: 'Create AI-powered native or cross-platform apps with personalized, data-driven experiences.',
      image: 'images/service-icons/mobiledev.png'
    },
    {
      title: 'Data Engineering & ML',
      description: 'Design reliable data pipelines for ML and ETL to keep data clean, consistent, and ready.',
      image: 'images/service-icons/mllearning.png'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Deploy and scale AI solutions seamlessly across AWS, Azure, and GCP environments.',
      image: 'images/service-icons/devops.png'
    },
    {
      title: 'Business IT Consulting',
      description: 'Modernize infrastructure with AI tools that boost efficiency and spark innovation.',
      image: 'images/service-icons/it.png'
    },
    {
      title: 'AI Chatbots & Virt. Assistants',
      description: 'Deliver 24/7 AI-driven chatbots for personalized, human-like customer interactions.',
      image: 'images/service-icons/cms.png'
    },
  ];  

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">
              With over a decade of experience in mobile and web app development, we enable businesses to bolster their digital presence in the fiercely competitive global market.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {
              services.map(function (service, idx) {
                return <div key={idx} className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img className="h-16" src={service.image} alt={'icon-image-for-' + idx} />
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 mt-4">{ service.title }</h4>
                  <p className="text-gray-600 text-center">{ service.description }</p>
                </div>
              })
            }
          </div>

        </div>
      </div>
    </section>
  )
}
