"use client";
import Image from "next/image";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Make Your Inquire",
    href: "#",
    description: `Either add the part number you required to the shopping cart using the part number search box above, or if you don't know the part numbers, simply describe them using our inquiry form.
          We supply genuine parts for Toyota, Lexus, Nissan, Infiniti, Mitsubishi, Honda, Mazda, Subaru, Suzuki.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://i.amayama.com/images/skin/tz_1.jpg",
    },
  },
  {
    id: 2,
    title: "Shipping Calculator",
    href: "#",
    description: `Once your inquiry has been received, we will make a quote including shipping charges. You can adjust shipping details and edit quotes at this stage. The quote will appear in your Amayama account usually in 1 - 2 days.
    Shipping Calculator..`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://i.amayama.com/images/skin/tz_2.jpg",
    },
  },
  {
    id: 3,
    title: "Order Processed",
    href: "#",
    description: `Once you receive the quote, payment can be made either by Paypal, Credit Card or by bank wire transfer. Once payment has been received your order will be processed.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://i.amayama.com/images/skin/tz_3.jpg",
    },
  },
  {
    id: 4,
    title: "Detailed ordering process description",
    href: "#",
    description: `That's all there is to it! Your order will arrive in up to 14 days from time of payment, depending on your location and shipping method chosen.
    Your inquiries are always welcome and we look forward to serving you.
    
    Detailed ordering process description.`,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://i.amayama.com/images/skin/tz_4.jpg",
    },
  },
];

const ThenWhat = () => {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">
            Then What?
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-full flex-col items-start justify-between"
            >
              <div className="relative mt-8 flex items-center justify-center w-full">
                <img
                  src={post.author.imageUrl}
                  alt="categories"
                  className="h-100 w-100 bg-gray-50 object-contain"
                />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 
                text-start group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThenWhat;
