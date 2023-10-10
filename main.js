


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
$(".dark-bg-button").click(function () {
    $("body").attr("class", "dark");
    $(".hr").attr("class", "dark-hr")
    $(".card").attr("class", "dark-card")
    $(".name").attr("class", "dark-name")
    $(".name").attr("class", "dark-name")
    $(".height").attr("class", "dark-height")
    $(".weight").attr("class", "dark-weight ");
    $(".check-BMI").attr("class", "check-BMI-dark");
    $(".reload").attr("class", "dark-reload");
    $(".copyright").attr("class", "copyright-dark");
    $(".output").attr("class", "output-dark ");
    $(".output-2").attr("class", "output-2-dark ");
});

$(".reload").click(function () {
    location.reload();
});

