import * as Icons from "@/app/icons";

import {} from '@'

export default function Icon({ icon }: { icon: keyof typeof Icons }) {
  return Icons[icon];
}
