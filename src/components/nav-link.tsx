import { Link, type LinkComponentProps } from "@tanstack/react-router";

export function NavLink(props: LinkComponentProps) {
  // const isCurrent = pathname === props.to;
  const isCurrent = false;

  return <Link data-current={isCurrent} {...props} />;
}
