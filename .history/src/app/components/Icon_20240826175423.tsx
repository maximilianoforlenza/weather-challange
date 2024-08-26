import * as Icons from "@/app/icons";

import {Icon} from '@/app/lib/definitions'

export default function Icon({ icon }: { icon: Icon }) {
  return Icons[icon];
}
