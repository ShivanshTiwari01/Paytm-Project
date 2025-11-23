export function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='w-full text-white bg-gray-800 hover:bg-gray-800 focus:outline-none foucs:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-0 mb-2'
    >
      {label}
    </button>
  );
}
