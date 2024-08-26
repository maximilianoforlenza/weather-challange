import * as Icons from "@/app/icons";

import {}

export default function Icon({ icon }: { icon: keyof typeof Icons }) {
  return Icons[icon];
}
