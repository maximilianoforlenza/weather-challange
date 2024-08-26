import * as Icons from "@/app/icons";

export default function Icon({ icon }: { icon: keyof typeof Icons }): {
  return Icons[icon];
}
