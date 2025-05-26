// src/components/Container.jsx
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-8 sm:px-12 lg:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
