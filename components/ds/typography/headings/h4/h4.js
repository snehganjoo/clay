export function H4({ children, className, ...props }) {
  return (
    <h4 className={`text-2xl font-bold text-slate-800 ${className}`}>
      {props?.text || children}
    </h4>
  );
}
export default H4;
