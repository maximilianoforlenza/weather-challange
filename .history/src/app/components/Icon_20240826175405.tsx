import * as Icons from "@/app/icons";

import {} from '@/app/l'

export default function Icon({ icon }: { icon: keyof typeof Icons }) {
  return Icons[icon];
}
