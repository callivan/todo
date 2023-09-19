export function IconEdit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13.75 5.50001L16.5 8.25001M4.58332 14.6667L3.66666 18.3333L7.33332 17.4167L17.9538 6.79617C18.2975 6.45237 18.4906 5.98614 18.4906 5.50001C18.4906 5.01387 18.2975 4.54764 17.9538 4.20384L17.7962 4.04617C17.4524 3.70248 16.9861 3.5094 16.5 3.5094C16.0139 3.5094 15.5476 3.70248 15.2038 4.04617L4.58332 14.6667Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
