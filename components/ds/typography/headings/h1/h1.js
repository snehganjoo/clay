export function H1({ children, className, ...props }) {
  return (
    <h1
      className={`text-5xl font-extrabold text-slate-800 leading-16 ${className}`}
    >
      {props?.text || children}
    </h1>
  );
}
export default H1;
