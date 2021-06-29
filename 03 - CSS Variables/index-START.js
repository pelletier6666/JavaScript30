let colored_elements = document.querySelectorAll('.hl');

const image = colored_elements[1];
const js_title_text = colored_elements[0];

const inputs = document.querySelectorAll('input');

function apply_input_changes() {

	js_title_text.style.color = inputs[2].value;
	image.style.background = inputs[2].value;
	image.style.filter = `blur(${inputs[1].value}px)`;
	image.style.padding = `${inputs[0].value}px`

}

inputs.forEach((item, index) => {
	item.onchange = apply_input_changes;
})




