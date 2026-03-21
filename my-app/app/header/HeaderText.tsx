import Link from "next/link";
export default function HeaderText({
  headerText,
  route,
}: {
  headerText: string;
  route: string;
}) {
  return (
    <Link
      href={route}
      className="relative text-xs md:text-sm uppercase tracking-widest font-medium
       text-white/80 hover:text- transition-colors 
       duration-300 whitespace-nowrap after:absolute 
       after:bottom-[-4px] after:left-0 after:w-0 after:h-px
        after:bg-white after:transition-all
         after:duration-300 hover:after:w-full"
    >
      {headerText}
    </Link>
  );
}