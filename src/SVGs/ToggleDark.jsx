const ToggleDark = ({ onClick, isVisible }) => {
  return (
    <>
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <rect width="48" height="24" rx="12" fill="white" />
        <circle cx="37" cy="12" r="7" fill="#5964E0" />
      </svg>
    </>
  );
};

export default ToggleDark;
