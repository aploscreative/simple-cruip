import IndustryCard from "@/components/industry-card";

export default function Industries() {
    const industries =  [
        {
            title: 'Education & EdTech',
            description: 'Personalized learning platforms, virtual tutors',
            alt: 'Education image',
            image: 'images/industries/education.png'
        },
        {
            title: 'Healthcare',
            description: 'Diagnostics, imaging, operational forecasting',
            alt: 'Healthcare image',
            image: 'images/industries/healthcare.png'
        },
        {
            title: 'Business IT',
            description: 'Modernize, automate, and scale with AI-powered solutions',
            alt: 'Business IT image',
            image: 'images/industries/it.png'
        },
        {
            title: 'Logistics & Supply Chain',
            description: 'Route optimization, asset tracking, maintenance alerts',
            alt: 'Logistics image',
            image: 'images/industries/logistics.png'
        },
        {
            title: 'Ecommerce & Retail',
            description: 'Demand prediction, generative content, intelligent chat support',
            alt: 'Ecommerce image',
            image: 'images/industries/retail.png'
        },
        {
            title: 'Marketing',
            description: 'Campaign optimization, customer segmentation, AI-driven content creation',
            alt: 'Marketing image',
            image: 'images/industries/fintech.png'
        },
    ];
    return (
        <div className="relative pb-12">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    { /* Section Header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Industries We Serve</h1>
                        <p className="text-xl text-gray-600">
                            Leveraging AI to redefine success across sectors:
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto  grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        {
                            industries.map((industry, idx) => <IndustryCard
                                key={idx}
                                image={industry.image}
                                alt={industry.alt}
                                title={industry.title}
                                description={industry.description}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
