import React from 'react';
import Link from 'next/link';

const HomeVideo = ({ videos }) => {
  return (
    <section className="section container mb-10 pb-0">
      <h3 className="my-5 flex w-fit border-b-[3px] border-solid border-primary pb-3">Video</h3>
      <div className="grid gap-10 md:grid-cols-3 md:gap-5 ">
        {videos.map((video, i) => (
          <div key={i} className="relative h-[200px] overflow-hidden rounded-lg bg-gray-300">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.id}?si=lxxSXI0SdsdD5mxh`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="mt-5 flex w-full justify-end">
        <Link href={`/videos`} className="btn btn-primary mt-4">
          See All
        </Link>
      </div>
    </section>
  );
};

export default HomeVideo;
