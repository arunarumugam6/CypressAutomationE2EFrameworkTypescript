const { defineConfig } = require("cypress");
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

module.exports = defineConfig({
  chromeWebSecurity: true,
  screenshotOnRunFailure: true,
  env:{
    baseUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",
  },
  e2e: {
    specPattern: "**/*.feature",
    //specPattern: "**/*.cy.ts",
    video: false,
    moduleResolution: "nodenext",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
