import * as Icons from "@/app/icons";
import { ReactSVGElement } from "react";

export default function Icon({ icon }: { icon: keyof typeof Icons }): ReactSVGElement {
  return Icons[icon];
}
