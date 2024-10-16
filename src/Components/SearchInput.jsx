
export function SearchInput() {
    return (
<form>
  <div
    className="relative max-w-lg mx-auto" 
    style={{
      margin: '0 auto', 
    }}
  >
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        style={{ color: 'rgba(108, 124, 92, 1)' }}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="search"
      className="block w-full p-4 ps-10 text-m border rounded-lg focus:ring focus:border"
      style={{
        color: 'rgba(163, 122, 82, 1)',
        backgroundColor: 'rgba(108, 124, 92, 0.2)',
        borderColor: 'rgba(108, 124, 92, 1)',
      }}
      required
    />
    <button
      type="submit"
      className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
      style={{
        backgroundColor: 'rgba(108, 124, 92, 1)',
        color: 'rgba(255, 255, 255, 1)',
      }}
    >
      Search
    </button>
  </div>
</form>

    )
}