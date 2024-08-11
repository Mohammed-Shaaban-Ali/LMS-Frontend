import React from "react";
type FAQItem = {
  question: string;
  answer: string;
};

// Array of FAQ items
const faqData: FAQItem[] = [
  {
    question: "How can I place an order?",
    answer:
      "You can easily place an order on our website by browsing our product catalog, selecting the items you want, and adding them to your cart. Then, proceed to checkout, where you can provide your shipping and payment information to complete the order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times may vary depending on your location and the shipping method chosen. Typically, orders are processed within 1-2 business days, and delivery can take 3-7 business days within India. You will receive a tracking notification once your order is shipped.",
  },
  {
    question: "Can I return a product if I'm not satisfied?",
    answer:
      "Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please contact our customer support at example@gmail.com for assistance.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we only provide shipping services within India. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations.",
  },
  {
    question: "What is your customer support contact?",
    answer:
      "If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at example@gmail.com.",
  },
  {
    question: "What are your terms and conditions?",
    answer:
      "You can find our detailed terms and conditions by visiting our Terms of Service page on our website. It includes information about our policies, user guidelines, and more.",
  },
];
const FAQSection: React.FC = () => {
  return (
    <section className=" text-gray-900 dark:text-gray-100 py-16 min-h-screen">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <div className="mb-12 space-y-5 md:mb-16 text-center">
          {" "}
          <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-white md:text-center md:text-5xl">
            Common <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-100 md:text-center md:text-2xl ">
            Frequently asked questions
          </p>
        </div>
        <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
          {faqData.map((faq, index) => (
            <details key={index}>
              <summary className="py-2 text-xl  outline-none cursor-pointer  mb-2">
                {faq.question}
              </summary>
              <div className="px-4 pb-4">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
