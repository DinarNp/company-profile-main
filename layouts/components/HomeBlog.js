import Link from "next/link";
import React from "react";
import Image from "next/image";
import { formatDate } from "@lib/utils/formatDate";

const HomeBlog = ({ blogs, beURL }) => {
  return (
    <div className="flex flex-col gap-3">
      {blogs.slice(0, 2).map((blog, i) => (
        <div key={"blog " + i} className="flex w-full flex-col">
          <div className="flex w-full items-start gap-3">
            {blog.attributes.image && (
              <Image
                className="line-clamp-3 h-32 max-w-48 rounded-lg object-contain"
                src={beURL + blog.attributes.image.data.attributes.url}
                alt={blog.attributes.title}
                width={445}
                height={500}
              />
            )}
            <div>
              <p className="mb-2 text-[16px]">
                <Link
                  href={`/blogs/${blog.attributes.slug}`}
                  className="block hover:text-primary"
                >
                  {blog.attributes.title}
                </Link>
              </p>
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <a className="ms-1 text-left text-text ">
                  {formatDate(blog.attributes.createdAt)}
                </a>
              </div>
            </div>
          </div>
          <hr className="my-8 h-px border-primary "></hr>
        </div>
      ))}
    </div>
  );
};

export default HomeBlog;
