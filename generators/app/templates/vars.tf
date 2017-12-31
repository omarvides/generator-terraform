# This vars file has an example of each type of variable
# For better documentation please use the description field at each variable,
# this resource is self-documenting capable, the more variables you describe and define the time
# the better your self generated documentation will be.

variable "key" {
  type = "string"
  description = "This variable is an example variable"
}

variable "images" {
  type = "map"
  description = "This variable will contain a map with some amis that can be used"

  default = {
    us-east-1 = "image-1234"
    us-west-2 = "image-4567"
  }
}

variable "zones" {
  type = "list"
  description = "a variable with the zones list"
  default = ["us-east-1a", "us-east-1b"]
}