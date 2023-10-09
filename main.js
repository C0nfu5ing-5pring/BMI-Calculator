$(".check-BMI").click(function () {
    let userName = $(".name-input").val();
    let userWeight = $(".weight-input").val();
    let userHeight = $(".height-input").val();
    userHeight = userHeight / 100;
    let bmi = userWeight / userHeight ** 2;

    $(".output").addClass("appear");
    $(".output-2").addClass("appear");
    $(".output").text(`${userName}, your BMI is: ${bmi.toFixed(2)}`);

    if (bmi < 16) {
        $(".output-2").text("Severe thinness");
    } else if (bmi >= 16 && bmi < 17) {
        $(".output-2").text("Moderate thinness");
    } else if (bmi >= 17 && bmi < 18.5) {
        $(".output-2").text("Mild thinness");
    } else if (bmi >= 18.5 && bmi < 25) {
        $(".output-2").text("Normal");
    } else if (bmi >= 25 && bmi < 30) {
        $(".output-2").text("Overweight");
    } else if (bmi >= 30 && bmi < 35) {
        $(".output-2").text("Obese Class I");
    } else if (bmi >= 35 && bmi < 40) {
        $(".output-2").text("Obese Class II");
    } else if (bmi >= 40) {
        $(".output-2").text("Obese Class III");
    }
});

$(".reload").click(function () {
    location.reload();
});