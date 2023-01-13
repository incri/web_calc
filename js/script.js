function calculation() {
    try {
        let final_output = 0;
        let input_data = output.value;
        console.log(input_data);
        final_output = eval(input_data) + Number(final_output);
        output.value = final_output;
    }

    catch (err) {
        alert(err)
    }

}

function clearAll() {
    output.value = "";
}