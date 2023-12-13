export function SubHeading({ children, className, ...props }) {
  return (
    <div className={`text-2xl text-slate-600 font-light ${className}`}>
      {props?.text || children}
    </div>
  );
}
export default SubHeading;
