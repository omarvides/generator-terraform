resource "aws_instance" "<%= answers.name %>" {
  ami           = "<%= answers.ami %>"
  instance_type = "<%= answers.instance_type %>"
}