export function H3({ children, className, ...props }) {
  return (
    <h3 className={`text-3xl font-bold text-slate-800 ${className}`}>
      {props?.text || children}
    </h3>
  );
}
export default H3;
