interface CustomLoaderProps {
  className?: string;
  innerClassName?: string;
}

const CustomLoader = ({ className, innerClassName }: CustomLoaderProps) => {
  return (
    <div className={`flex justify-center items-center w-full h-full ${className}`}>
      <div
        className={`loader animate-spin rounded-full border-1 border-t-2 border-gray-200 border-t-gray-600 h-16 w-16 ${innerClassName}`}
      ></div>
    </div>
  );
};

export default CustomLoader;
