const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader py-6 px-4 shadow-xl text-stone-300 bg-stone-500 bg-opacity-20 w-full">
      <div className="skeleton-image h-96 w-full min-h-96"></div>
      <div className="skeleton-text w-full"></div>
      <div className="skeleton-text w-full"></div>
    </div>
  );
};

export default SkeletonLoader;
