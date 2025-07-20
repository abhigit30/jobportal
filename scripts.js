document.addEventListener('DOMContentLoaded', function() {
    console.log('Job portal is ready');

    const searchInput = document.getElementById('search');
    const jobRequirements = document.querySelectorAll('.job-requirement');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        jobRequirements.forEach(job => {
            const text = job.textContent.toLowerCase();
            if (text.includes(filter)) {
                job.style.display = '';
            } else {
                job.style.display = 'none';
            }
        });
    });
});
