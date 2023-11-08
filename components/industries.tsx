import IndustryCard from "@/components/industry-card";

export default function Industries() {
    const industries =  [
        {
            title: 'Education',
            alt: 'Education image',
            image: 'images/industries/education.png'
        },
        {
            title: 'Healthcare',
            alt: 'Healthcare image',
            image: 'images/industries/healthcare.png'
        },
        {
            title: 'Business IT',
            alt: 'Business IT image',
            image: 'images/industries/it.png'
        },
        {
            title: 'Logistics',
            alt: 'Logistics image',
            image: 'images/industries/logistics.png'
        },
        {
            title: 'Ecommerce & Retail',
            alt: 'Ecommerce image',
            image: 'images/industries/retail.png'
        },
        {
            title: 'Supply Chain',
            alt: 'Supply Chain image',
            image: 'images/industries/supply.png'
        },
    ];
    return (
        <div className="relative pb-12">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    { /* Section Header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Providing services to a variety of industries</h1>
                        <p className="text-xl text-gray-600">
                            We are experienced in delivering sofwtare solutions to companies from different business verticals. Our background covers industries such as:
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto  grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        {
                            industries.map((industry, idx) => <IndustryCard
                                key={idx}
                                image={industry.image}
                                alt={industry.alt}
                                title={industry.title}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
