import * as Icons from "@/app/icons";

import { Icon as IconType } from "@/app/lib/definitions";
import React from "react";

export default function Icon({ icon }: { icon: IconType }): React. {
  return Icons[icon];
}
