module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('redux container', {
    description: 'contains an action, api, selectors, reducers file, along with a components folder',
     prompts: [{
         type: 'input',
         name: 'name',
         message: 'Folder name: '
     }],
     actions: [
       {
         type: 'add',
         path: 'src/scenes/{{name}}/action.js',
         templateFile: 'templates/action.js.hbs',
       }, {
         type: 'add',
         path: 'src/scenes/{{name}}/reducers.js',
         templateFile: 'templates/reducers.js.hbs'
       },
       {
         type: 'add',
         path: 'src/scenes/{{name}}/selectors.js',
         templateFile: 'templates/selectors.js.hbs',
       }, {
         type: 'add',
         path: 'src/scenes/{{name}}/components/dumbcomponent.js',
         templateFile: 'templates/component.js.hbs',
       },
       {
         type: 'add',
         path: 'src/scenes/{{name}}/api.js',
         templateFile: 'templates/api.js.hbs',
       }, {
         type: 'add',
         path: 'src/scenes/{{name}}/index.js',
         templateFile: 'templates/index.js.hbs',
       },
     ],
  });
};
