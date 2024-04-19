const BottomBar = () => {
  return (
    <div className="flex items-center justify-end font-semibold bg-white px-3 py-5 gap-3 capitalize">
    <button className="text-red-500 hover:text-red-600">
      Cancel
    </button>
    <button className="bg-indigo-800 text-white hover:text-indigo-600 px-7 py-4 rounded-lg">
      Save & Continue
    </button>
  </div>
  );
};

export default BottomBar;
