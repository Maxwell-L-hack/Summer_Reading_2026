extends Node2D

var draggable = false
var inside_droppable = false
var body_ref
var offset: Vector2
var initialPos: Vector2
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(_delta: float) -> void:
	if draggable:
		if Input.is_action_just_pressed("click"):
			offset = get_global_mouse_position() - global_position
			global.dragging = true
		if Input.is_action_pressed("click"):
			global_position = get_global_mouse_position() - offset
		elif Input.is_action_just_released("click"):
			global.dragging = false
			var tween = get_tree().create_tween()
			if inside_droppable:
				tween.tween_property(self,"position",body_ref.position,0.2).set_ease(Tween.EASE_OUT)
			else:
				tween.tween_property(self,"position",initialPos,0.2).set_ease(Tween.EASE_IN)


func _on_area_2d_mouse_entered() -> void:
	if not global.dragging:
		draggable = true
		scale = Vector2(1.05, 1.05)


func _on_area_2d_mouse_exited() -> void:
	if not global.dragging:
		draggable = false
		scale = Vector2(1, 1)


func _on_area_2d_body_entered(body: Node2D) -> void:
	if body.is_in_group('dropable'):
		inside_droppable = true
		body.modulate = Color(Color(255.014, 255.014, 255.014, 0.765))
		body_ref = body


func _on_area_2d_body_exited(body: Node2D) -> void:
	if body.is_in_group('dropable'):
		inside_droppable = true
		body.modulate = Color(Color(255.014, 255.014, 255.014, 0.392))
