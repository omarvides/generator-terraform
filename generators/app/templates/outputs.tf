output "addresses" {
  value = ["${aws_instance.<%= answers.name %>.*.public_dns}"]
}