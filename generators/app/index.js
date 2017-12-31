const Generator = require('yeoman-generator');
const util = require('util');

module.exports = class extends Generator {
  prompting() {

    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
        store: true,
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version will this resource start at?',
        default: '1.0.0',
        store: true,
      },
      {
        type: 'input',
        name: 'resource',
        message: 'The name of your first resource at the project',
        default: this.appname,
        store: true,
      },
      {
        type: 'input',
        name: 'amy',
        message: 'Do you have an amy to use for your resource?',
        default: 'ami-58deab22',
        store: true,
      },
      {
        type: 'list',
        name: 'type',
        message: 'The type of resource you need to create',
        choices: ['aws_instance'],
        default: 'aws_instance',
        store: true,
      },
      {
        type: 'list',
        name: 'backend',
        message: 'Which backend?',
        choices: ['consul', 's3', 'artifactory'],
        store: true,
      },
      {
        type: 'list',
        name: 'provider',
        message: 'Which provider will you use',
        choices: ['aws', 'vsphere', 'google cloud'],
        store: true,
      }
    ];

    return this.prompt(questions).then((answers) => {
      this.log(util.inspect(answers));
      this.answers = answers;
    });
  }
  
  writing() {
    this.fs.copyTpl(
      this.templatePath('aws.tf'), 
      this.destinationPath(`${this.answers.name}/${this.answers.resource}/aws.tf`), { answers: this.answers}
    );

    this.fs.copyTpl(
      this.templatePath('outputs.tf'), 
      this.destinationPath(`${this.answers.name}/${this.answers.resource}/outputs.tf`), { answers: this.answers}
    );

    this.fs.copyTpl(
      this.templatePath('vars.tf'), 
      this.destinationPath(`${this.answers.name}/${this.answers.resource}/vars.tf`), { answers: this.answers}
    );

    this.fs.copyTpl(
      this.templatePath('README.md'), 
      this.destinationPath(`${this.answers.name}/${this.answers.resource}/README.md`), { answers: this.answers}
    );

    this.fs.copyTpl(
      this.templatePath('gitignore'), 
      this.destinationPath(`${this.answers.name}/${this.answers.resource}/.gitignore`), { answers: this.answers}
    );
  }
}