export function IconCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? 'stroke-[currentColor]'}
      {...props}
    >
      <path
        d="M6.46274 15.5373L11 11M11 11L15.5373 6.46273M11 11L6.46274 6.46273M11 11L15.5373 15.5373"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
