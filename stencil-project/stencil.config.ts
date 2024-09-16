import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-project',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'assets' } // Copy the assets folder to the build directory
      ]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
