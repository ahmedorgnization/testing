export default function (plop) {
  // We declare a new generator called "module"
  plop.setGenerator("component", {
    // Succintly describes what generator does.
    description: "Create a new Component",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/components/{{camelCase name}}/index.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{camelCase name}}/styles.module.scss",
        templateFile: "plop-templates/style.hbs",
      },
      {
        type: "add",
        path: "src/components/{{camelCase name}}/index.test.tsx",
        templateFile: "plop-templates/index.test.hbs",
      },
    ],
  });

  plop.setGenerator("container", {
    // Succintly describes what generator does.
    description: "Create a new Container",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your Container name?",
      },
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/containers/{{camelCase name}}/index.tsx",
        templateFile: "plop-templates/container.hbs",
      },
      {
        type: "add",
        path: "src/containers/{{camelCase name}}/styles.module.scss",
        templateFile: "plop-templates/containerStyle.hbs",
      },
      {
        type: "add",
        path: "src/containers/{{camelCase name}}/index.test.tsx",
        templateFile: "plop-templates/index.test.hbs",
      },
    ],
  });

  plop.setGenerator("page", {
    // Succintly describes what generator does.
    description: "Create a new Page",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      {
        type: "add",
        path: "src/pages/{{camelCase name}}/index.tsx",
        templateFile: "plop-templates/page.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{camelCase name}}/styles.module.scss",
        templateFile: "plop-templates/style.hbs",
      },
    ],
  });
}
