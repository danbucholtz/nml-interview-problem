/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';


import {
  ListPage as ListPage
} from './components/list-page/list-page';

declare global {
  interface HTMLListPageElement extends ListPage, HTMLStencilElement {
  }
  var HTMLListPageElement: {
    prototype: HTMLListPageElement;
    new (): HTMLListPageElement;
  };
  interface HTMLElementTagNameMap {
    "list-page": HTMLListPageElement;
  }
  interface ElementTagNameMap {
    "list-page": HTMLListPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "list-page": JSXElements.ListPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ListPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
