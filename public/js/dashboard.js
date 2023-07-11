function loadModal(elements) {
    elements.forEach(function (element) {
        $(element).on('click', function () {

            var dataContent = $(this).data('content');
            $.get("/dashboard/pages/edit", function (dataModal) {
                var $data = $(dataModal).filter(function () {
                    return $(this).data('content') === dataContent;
                });
                document.body.insertBefore($data[0], document.body.childNodes[2]);
            });
        });
    });
}

function closeModal() {
    $('body').on('click', '#modal-container', function (event) {
        event.stopPropagation();
    });

    $('body').on('click', function (event) {
        if (!$(event.target).closest('#modal-container').length) {
            $('div[role="modal"]').remove();
        }
    });

    $(document).on('keydown', function (event) {
        if (event.key === "Escape") {
            $('div[role="modal"]').remove();
        }
    });
}

function loadDashboardContent(elements, data) {
    elements.forEach(function (element) {
        $(element).on('click', function (event) {
            event.preventDefault();

            $.ajax({
                url: $(this).attr('href'),
                type: 'GET',
                dataType: 'html',
                success: function (response) {
                    $('#dashboard-content').html(response);

                    loadModal(data.modal);
                    closeModal();
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        });
    });
}

function iconSprite(svg) {
    svg.forEach(function (item) {
        $.get(item, function (data) {
            var div = document.createElement("div");
            div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
            document.body.insertBefore(div, document.body.childNodes[0]);
        });
    })
}

document.addEventListener('DOMContentLoaded', function () {
    iconSprite(["assets/icons/dashboard.svg", "assets/icons/main.svg"]);

    loadDashboardContent([
        '#nav-home',
        '#nav-pages',
        '#nav-posts',
        '#nav-stats',
        '#nav-mail'
    ], {
        modal: [
            '#card-service',
            '#card-testimonial',
            '#card-contact',
            '#card-home'
        ]
    });
})