import { ReactNode } from "react";

export default function GlassSheet({children}: {children?: ReactNode}) {
  return (
    <div id="glass-sheet">
      {children}
    </div>
  )
}
