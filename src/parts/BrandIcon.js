/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-dark-grey text-4xl">
        Fata
        <span className="text-light-grey">Fat</span>
        <span className="text-orange-color">.tech</span>
      </p>
    </Button>
  );
}
