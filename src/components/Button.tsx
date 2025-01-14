"use client";

import { DsButton } from "@cz/cz-react-ui-library";

function Button({ buttonText }: Readonly<{ buttonText: string }>) {
  return <DsButton>{buttonText}</DsButton>;
}

export default Button;