"use client";
import Image from "next/image";

// Define types for the testimonial data
interface Testimonial {
  name: string;
  title: string;
  content: string;
  imageUrl: string;
  twitterUrl: string;
}

// Define props for the Testimonials component
interface TestimonialsProps {}
const sampleTestimonials: Testimonial[] = [
  {
    name: "Kanye West",
    title: "Rapper & Entrepreneur",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
    twitterUrl: "https://twitter.com/kanyewest",
    content: "Find God.",
  },
  {
    name: "Tim Cook",
    title: "CEO of Apple",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
    twitterUrl: "https://twitter.com/tim_cook",
    content:
      "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
  },
  {
    name: "Kanye West",
    title: "Rapper & Entrepreneur",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg",
    twitterUrl: "https://twitter.com/kanyewest",
    content: "Find God.",
  },
  {
    name: "Tim Cook",
    title: "CEO of Apple",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
    twitterUrl: "https://twitter.com/tim_cook",
    content:
      "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
  },
  {
    name: "Parag Agrawal",
    title: "CEO of Twitter",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
    twitterUrl: "https://twitter.com/paraga",
    content:
      "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
  },
  {
    name: "Tim Cook",
    title: "CEO of Apple",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
    twitterUrl: "https://twitter.com/tim_cook",
    content:
      "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
  },
  {
    name: "Parag Agrawal",
    title: "CEO of Twitter",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg",
    twitterUrl: "https://twitter.com/paraga",
    content:
      "Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam pellentesque nec. Turpis cursus in hac habitasse platea dictumst.",
  },
  {
    name: "Tim Cook",
    title: "CEO of Apple",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg",
    twitterUrl: "https://twitter.com/tim_cook",
    content:
      "Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
  },
  {
    name: "Satya Nadella",
    title: "CEO of Microsoft",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
    twitterUrl: "https://twitter.com/satyanadella",
    content:
      "Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.",
  },
];

export default function Testimonials({}: TestimonialsProps) {
  return (
    <section id="testimonies" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="mb-12 space-y-5 md:mb-16 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white md:text-5xl">
            Student&apos;s <span className="text-gradient">Feedback</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-100 md:text-2xl">
            Let&apos;s have a look at our students reaction!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {sampleTestimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute transition rounded-lg opacity-25 -inset-1 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
              <a href={testimonial.twitterUrl} className="cursor-pointer">
                <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white dark:bg-slate-800 ring-1 ring-gray-900/5 dark:ring-gray-100/5">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 bg-center bg-cover border rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-500 text-md">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="leading-normal text-gray-800 dark:text-gray-300 text-md">
                    {testimonial.content}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
