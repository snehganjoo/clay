export function H2({ children, className, ...props }) {
  return (
    <h2 className={`text-4xl font-bold text-slate-800 leading-16 ${className}`}>
      {props?.text || children}
    </h2>
  );
}
export default H2;
