import { useState } from "react";

const faqData = [
  {
    question: "Why choose us?",
    answer:
      "We are a trusted IT and digital services company dedicated to helping businesses thrive in the digital landscape. Our team of experienced professionals leverages cutting-edge technologies, innovative strategies, and industry best practices to deliver tailored solutions. We prioritize efficiency, scalability, security, and customer satisfaction to ensure long-term success for our clients.",
  },
  {
    question: "What services do we offer?",
    answer:
      "Our services include full-cycle software development, cloud computing, IT consulting, enterprise solutions, mobile and web application development, cybersecurity, data analytics, and AI-driven automation. We provide customized solutions that align with your business objectives and operational needs.",
  },
  {
    question: "What industries do we serve?",
    answer:
      "We cater to a diverse range of industries, including Healthcare, Finance, E-commerce, Retail, Manufacturing, Logistics, EdTech, and Government services. Our solutions are designed to optimize workflows, enhance customer experiences, and drive digital transformation across multiple sectors.",
  },
  {
    question: "What is our preferred development methodology?",
    answer:
      "We follow Agile and DevOps methodologies to ensure seamless project execution, continuous integration, and faster time-to-market. Agile allows for flexibility, iterative improvements, and close collaboration with stakeholders, while DevOps enhances operational efficiency, automation, and deployment reliability.",
  },
  {
    question: "How do we ensure security and compliance?",
    answer:
      "We implement robust security measures, including data encryption, multi-factor authentication, and regulatory compliance frameworks such as GDPR, HIPAA, and ISO 27001. Our cybersecurity experts conduct regular audits, vulnerability assessments, and risk management to protect your data and IT infrastructure.",
  },
  {
    question: "What technologies do we use?",
    answer:
      "We leverage modern technologies such as cloud platforms (AWS, Azure, Google Cloud), programming languages (JavaScript, Python, Java, C#), frameworks (React, Angular, .NET, Django), DevOps tools (Docker, Kubernetes, CI/CD pipelines), AI/ML solutions, and blockchain technology to build scalable, high-performance solutions.",
  },
  {
    question: "What is our post-launch support policy?",
    answer:
      "We provide continuous post-launch support, including maintenance, performance optimization, security updates, and feature enhancements. Our dedicated support team ensures that your application runs smoothly and adapts to evolving business needs, minimizing downtime and maximizing efficiency.",
  },
  {
    question: "How can we help businesses with digital transformation?",
    answer:
      "We guide businesses through their digital transformation journey by assessing their existing processes, identifying pain points, and implementing innovative solutions such as cloud migration, AI-driven automation, IoT integration, and data-driven decision-making. Our goal is to enhance operational efficiency, customer engagement, and revenue growth.",
  },
];
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white lg:py-20 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          Questions? <br /> The answers are here
        </h2>
        <div className="mt-8 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
