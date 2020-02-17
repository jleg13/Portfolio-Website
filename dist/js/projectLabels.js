$('#carouselExampleCaptions').on('slide.bs.carousel', function (e) {
    removeCurrentLabel()
    if (e.relatedTarget.id === 'project1') {
        $("#project_label1").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project2') {
        $("#project_label2").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project3') {
        $("#project_label3").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project4') {
        $("#project_label4").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project5') {
        $("#project_label5").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project6') {
        $("#project_label6").addClass('activeLabel');
    } else if (e.relatedTarget.id === 'project7') {
        $("#project_label7").addClass('activeLabel');
    }

});

function removeCurrentLabel() {
    //remove current active label
    $('.projects__sm__Labels').each(function () {
        if ($(this).hasClass("activeLabel")) {

            $(this).removeClass("activeLabel");
        }
    });
}