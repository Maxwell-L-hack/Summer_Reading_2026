extends Node2D

var previous_location
@onready var player = $"../Player"

func _ready():
	previous_location = player.global_position
