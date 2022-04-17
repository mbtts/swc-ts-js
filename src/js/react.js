import React from 'react';
import { renderToString } from 'react-dom/server';
import { Component } from "./component";

export function render() {
  return renderToString(<Component />);
}
