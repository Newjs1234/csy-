const layout = function(name, title, content, img1, img2) {
    return `
    <div class="row bg-secondary">
    <div class="col-lg-6">
        <div class="profile-text">
            <h3>${ name }</h3>
            <h5>${ title }</h5>
            <p>${ content }</p>
        </div>
        <img src="../../${ img1 }" alt="${ img1 }" style="width: 100%" />
    </div>
    <div class="col-lg-6">
        <img class="logo-none" src="../../${ img2 }" alt="${ img2 }" style="width: 60%; height: auto; padding-top: 100px;" />
    </div>
    </div>
    `
}

module.exports = layout;