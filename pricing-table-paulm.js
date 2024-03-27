document.addEventListener('DOMContentLoaded', function() {
    const planOptionsPaul = document.querySelectorAll('.plan-option-paul');
    const planContentsPaul = document.querySelectorAll('.plan-content-paul');

    planOptionsPaul.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsPaul.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsPaul.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionPaul = document.querySelector('.expandable-section-paul');
    const expandableContentPaul = document.querySelector('.expandable-content-paul');

    expandableSectionPaul.addEventListener('click', function() {
        expandableContentPaul.style.display = expandableContentPaul.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnPaul = document.getElementById('founder15-book-now-paul');
    const founder15ScheduleEmbedPaul = document.getElementById('founder15-schedule-embed-paul');
    const founder15PackageDetailsPaul = document.getElementById('founder15-package-details-paul');
    const founder15BackToFeaturesPaul = document.getElementById('founder15-back-to-features-paul');

    founder15BookNowBtnPaul.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedPaul.style.display = 'block';
        founder15PackageDetailsPaul.style.display = 'none';
        founder15BackToFeaturesPaul.style.display = 'block';
    });

    founder15BackToFeaturesPaul.addEventListener('click', function() {
        founder15ScheduleEmbedPaul.style.display = 'none';
        founder15PackageDetailsPaul.style.display = 'block';
        founder15BackToFeaturesPaul.style.display = 'none';
    });

    const growthBookNowBtnPaul = document.getElementById('growth-book-now-paul');
    const growthScheduleEmbedPaul = document.getElementById('growth-schedule-embed-paul');
    const growthPackageDetailsPaul = document.getElementById('growth-package-details-paul');
    const growthBackToFeaturesPaul = document.getElementById('growth-back-to-features-paul');

    growthBookNowBtnPaul.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedPaul.style.display = 'block';
        growthPackageDetailsPaul.style.display = 'none';
        growthBackToFeaturesPaul.style.display = 'block';
    });

    growthBackToFeaturesPaul.addEventListener('click', function() {
        growthScheduleEmbedPaul.style.display = 'none';
        growthPackageDetailsPaul.style.display = 'block';
        growthBackToFeaturesPaul.style.display = 'none';
    });

    const accelerateBookNowBtnPaul = document.getElementById('accelerate-book-now-paul');
    const accelerateScheduleEmbedPaul = document.getElementById('accelerate-schedule-embed-paul');
    const acceleratePackageDetailsPaul = document.getElementById('accelerate-package-details-paul');
    const accelerateBackToFeaturesPaul = document.getElementById('accelerate-back-to-features-paul');

    accelerateBookNowBtnPaul.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedPaul.style.display = 'block';
        acceleratePackageDetailsPaul.style.display = 'none';
        accelerateBackToFeaturesPaul.style.display = 'block';
    });

    accelerateBackToFeaturesPaul.addEventListener('click', function() {
        accelerateScheduleEmbedPaul.style.display = 'none';
        acceleratePackageDetailsPaul.style.display = 'block';
        accelerateBackToFeaturesPaul.style.display = 'none';
    });
});
