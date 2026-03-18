extends Area2D

var checkpoint_main

func _ready() -> void:
	checkpoint_main = get_parent().get_parent().get_node(checkpoint_main)


func _on_body_entered(body: Node2D) -> void:
	if body.name == "Player":
		checkpoint_main.last_location = $Marker2D.global_position
