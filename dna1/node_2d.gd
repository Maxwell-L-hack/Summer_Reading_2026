extends Node2D


# Called when the node enters the scene tree for the first time.
func _ready() -> void:
	pass # Replace with function body.






# Called when the node enters the scene tree for the first time.


func _on_button_pressed() -> void:
	$RichTextLabel.visible = true
	$RichTextLabel.bbcode_text =  "Take this info to the dino incubator in the library.  Hint: The time of the dinosaurs was the [b]M[/b]ezosoic [b]E[/b]ra [b]252[/b] million years ago." # Replace with function body.
