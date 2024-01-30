import React from 'react';

const FAQItem = ({ question, answer }) => {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{answer}</p>
      </details>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <FAQItem
          question="What is a SAAS platform?"
          answer="SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality."
        />
        <FAQItem
          question="How does billing work?"
          answer="We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
        />
        {/* Repeat the pattern for other FAQ items */}
      </div>
    </div>
  );
};

export default FAQSection;
