const backgroundImg = (img) => {
    return `
        <div class="row">
            <div class="background-img" style="background-image: url('../../${ img }');"></div>
        </div>
    `
}

module.exports = backgroundImg;