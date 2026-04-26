# DragDropSprite.gd
# Language: GDScript for Godot

extends Node2D

# Signal for optional external handling
signal dragged(position)

# Internal variable to track dragging state
var dragging: bool = false
var offset: Vector2 = Vector2.ZERO

func _ready():
	# Make sure the child Sprite exists
	if not $Sprite2D:
		push_error("Sprite child node is missing. Please add a Sprite as a child.")
	# Enable input process
	set_process_input(true)

func _input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		var global_mouse_pos = get_global_mouse_position()
		
		# Detect left mouse click and start dragging if the mouse is over the sprite
		if event.button_index == MOUSE_BUTTON_LEFT:
			if event.pressed and _is_mouse_over_sprite(global_mouse_pos):
				dragging = true
				# Store offset between node position and mouse
				offset = position - global_mouse_pos
			elif not event.pressed and dragging:
				dragging = false

	elif event is InputEventMouseMotion and dragging:
		# Update position while dragging
		position = event.position + offset
		emit_signal("dragged", position)

func _is_mouse_over_sprite(global_mouse_pos: Vector2) -> bool:
	# Get local mouse position relative to Node2D
	var local_mouse = to_local(global_mouse_pos)
	# Get sprite rect size
	var sprite = $Sprite2D
	var sprite_rect = Rect2(Vector2.ZERO, sprite.texture.get_size())
	return sprite_rect.has_point(local_mouse)
