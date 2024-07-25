import React from 'react';
import Image from 'next/image';

const CourseThumbnail = ({ courseInfo }:any) => {
  const getImageDimensions = (url:any) => {
    // Extract dimensions from the URL if they are present, otherwise use default values
    const match = url.match(/\/(\d+)x(\d+)\//);
    if (match) {
      return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
    }
    return { width: 800, height: 600 }; // Default values
  };

  let dimensions = { width: 800, height: 600 };
  if (courseInfo?.thumbnail?.startsWith("https://res.cloudinary.com/")) {
    dimensions = getImageDimensions(courseInfo.thumbnail);
  }

  return (
    <div>
      {courseInfo?.thumbnail ? (
        courseInfo.thumbnail.startsWith("https://res.cloudinary.com/") ? (
          <Image
            src={courseInfo.thumbnail}
            alt="thumbnail"
            width={dimensions.width}
            height={dimensions.height}
            layout="responsive" // Adjust based on your layout needs
          />
        ) : (
          <img
            src={courseInfo.thumbnail}
            alt="thumbnail"
            className="max-h-full w-full object-cover"
          />
        )
      ) : (
        <span className="text-black dark:text-white">
          Drag and Drop your thumbnail here or click to browse
        </span>
      )}
    </div>
  );
};

export default CourseThumbnail;
