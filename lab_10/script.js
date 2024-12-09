document.addEventListener('DOMContentLoaded', function() {
    let toysItems = document.querySelectorAll('.click');

    toysItems.forEach(function(item) {
        item.addEventListener('click', function() {
            let backItems = document.querySelectorAll('.back');
            backItems.forEach(function(backItem) {
                backItem.classList.remove('selected');
            });

            item.classList.add('selected');

            let url = item.getAttribute('data-url');
            window.location.href = url;
        });
    });
});

