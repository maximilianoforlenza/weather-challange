import * as Icons from "@/app/icons";
import { ReactElement } from "react";

export default function Icon({ icon }: { icon: keyof typeof Icons }): ReactElement {
  return Icons[icon];
}
