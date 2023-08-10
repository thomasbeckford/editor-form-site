const ButtonWithSpinner = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <button
    type="submit"
    className="bg-blue-500 rounded-md items-center justify-center px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={isSubmitting}
  >
    <div className="flex items-center gap-2">
      <svg
        className={`animate-spin h-5 w-5 ${isSubmitting ? 'flex' : 'hidden'}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {isSubmitting ? 'Processing...' : 'Submit'}
    </div>
  </button>
);

export default ButtonWithSpinner;
