import { ContactForm } from "./contact-form";

export default function ContactSection() {
  return (
    <section className="relative overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg bg-blend-lighten" style={{
      backgroundImage: `url(/images/parallax.jpg)`
    }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-4xl lg:max-w-none">
            <div className="flex flex-col justify-center h-full">
              {/* Section header */}
              <div className="w-full mx-auto text-center pb-12 md:pb-10">
                <h2 className="h2 mb-4 text-white">Ready to Reimagine Possibilities?</h2>
                <p className="text-xl text-white">
                  Tap into the future of intelligent software solutions.<br/>
                  <b>Get your free consultation today</b> and let's build something extraordinary—together.
                </p>
              </div>
              <ul className=" text-white text-xl marker:text-green list-outside list-disc">
                <li>Free consultation for your project</li>
                <li>Flexible billing models</li>
                <li>Transparent pricing policy</li>
                <li>We always deliver <i>`your`</i> source code with the project</li>
                <li>Have us build your project or let us join an existing one</li>
                <li>Signed NDS for all project related information</li>
              </ul>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
