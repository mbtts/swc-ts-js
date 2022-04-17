import React from 'react';
import { renderToString } from 'react-dom/server';
import { Component } from "../js/component";

export function render() {
  return renderToString(<Component />);
}
